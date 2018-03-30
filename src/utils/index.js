import { uniqueId } from 'lodash';

/**
 * Reusable utils for managing array of items with ids.
 */

export const createItem = (item = {}) => {
    return { ...item, id: uniqueId() };
};

export const addItem = (items = [], item) => {
  return [ ...items, item ];
}

const byId = (targetId) => ({ id } = {}) => id !== targetId;

export const removeItemById = (items = [], idToRemove) => {
  return items.filter(byId(idToRemove));
};