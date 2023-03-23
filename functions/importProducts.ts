import { ImportProducts } from "@teamkeel/sdk";

export default ImportProducts(async (inputs, api, ctx) => {
    api.permissions.allow();

    await inputs.productNames.forEach(async (value) => {
        await api.models.product.create(value);
    });

    return { count: inputs.productNames.length };
});
