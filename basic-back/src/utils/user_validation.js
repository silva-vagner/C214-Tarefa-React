const create = {
    email: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    email: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
    nome: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    }
};

const get = {
    email: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    email: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};