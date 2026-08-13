export function getAssetPath(path: string) {
    const basePath = process.env.NODE_ENV === 'production'
        ? '/online-store'
        : '';

    return `${basePath}${path}`;
}