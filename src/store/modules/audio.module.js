
import {SET_TEST} from "../types/mutations.type";
import {DO_TEST} from "../types/actions.type";

const state = {
    test: null,
};

const getters = {
    getTest(state) {
        return state.test;
    },
};

const actions = {
    [DO_TEST](context) {
        context.commit(SET_TEST, 'test from action');
    },
};

const mutations = {
    [SET_TEST](state, test) {
        state.test = test;
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};
