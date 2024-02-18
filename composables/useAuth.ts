import { jwtDecode as jwt_decode } from "jwt-decode";

export default function useAuth() {
	const useAuthToken = () => useState<string>("auth_token");
	const useAuthUser = () => useState<UserTransformer>("auth_user");
	const useAuthLoading = () => useState<boolean>("auth_loading", () => true);

	const setToken = (token: string) => {
		const authToken = useAuthToken();
		authToken.value = token;
	};
	const setUser = (user: UserTransformer) => {
		const authUser = useAuthUser();
		authUser.value = user;
	};
	const setAuthLoading = (loading: boolean) => {
		const authLoading = useAuthLoading();
		authLoading.value = loading;
	};

	const login = async ({
		username,
		password,
	}: {
		username: string;
		password: string;
	}) => {
		try {
			const { user, access_token } = await $fetch<{
				user: UserTransformer;
				access_token: Token.AccessToken;
			}>("/api/auth/login", {
				method: "POST",
				body: {
					username,
					password,
				},
			});
			setToken(access_token);
			setUser(user);
			return Promise.resolve(user);
		} catch (error) {
			return Promise.reject(error);
		}
	};

	const refreshToken = async () => {
		try {
			const { access_token } = await $fetch<{
				access_token: Token.AccessToken;
			}>("/api/auth/refresh");
			setToken(access_token);
			return Promise.resolve(access_token);
		} catch (error) {
			return Promise.reject(error);
		}
	};

	const getUser = async () => {
		try {
			const { user } = await useFetchApi<{ user: UserTransformer }>(
				"/api/auth/user"
			);
			setUser(user);
			return Promise.resolve(user);
		} catch (error) {
			return Promise.reject(error);
		}
	};

	const refreshAccessToken = () => {
		const authToken = useAuthToken();

		if (!authToken.value) return;

		const jwt = jwt_decode<{
			exp: number;
		}>(authToken.value);

		const newRefreshTime = jwt.exp - 60000;

		setTimeout(async () => {
			await refreshToken();
			refreshAccessToken();
		}, newRefreshTime);
	};

	const initAuth = async () => {
		setAuthLoading(true);
		try {
			await refreshToken();
			await getUser();

			refreshAccessToken();

			return Promise.resolve(true);
		} catch (error) {
			return Promise.reject(error);
		} finally {
			setAuthLoading(false);
		}
	};
	return { login, useAuthUser, initAuth, useAuthToken, useAuthLoading };
}
