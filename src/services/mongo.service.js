exports.get = async (query, model) => {
    try {
        const result = await model.find(query).lean();
        return result;
    } catch (e) {
        throw Error(e);
    }
};
exports.getAll = async (query, model) => {
    try {
        const result = await model.find(query).lean();
        return result;
    } catch (e) {
        throw Error(e);
    }
};

exports.getById = async (id, model) => {
    try {
        const result = await model.findById(id).lean();
        return result;
    } catch (e) {
        throw Error(e);
    }
};

exports.post = async (body, model) => {
    try {
        const result = await model.create(body);
        return result;
    } catch (e) {
        throw Error(e);
    }
};

exports.put = async (id, body, model) => {
    try {
        const result = await model.findByIdAndUpdate(id, body, {
            new: true
        });
        return result;
    } catch (e) {
        throw Error(e);
    }
};

exports.delete = async (id, model) => {
    try {
        const result = await model.findByIdAndRemove(id);
        return result;
    } catch (e) {
        throw Error(e);
    }
};