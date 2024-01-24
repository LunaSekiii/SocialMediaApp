export default <Res>(
	url: string,
	option: Record<string, any> = {}
): Promise<Res> => {
	const { useAuthToken } = useAuth();
	return $fetch<Res>(url, {
		...option,
		headers: {
			...option.headers,
			Authorization: `Bearer ${useAuthToken().value}`,
		},
	});
};
