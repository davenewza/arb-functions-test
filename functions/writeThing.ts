import { WriteThing } from "@teamkeel/sdk";

export default WriteThing(async (inputs, api, ctx) => {
    api.permissions.allow();
    return await api.models.thing.create(inputs);
});
