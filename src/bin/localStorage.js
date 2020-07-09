export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('SessionId');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return err;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('SessionId', serializedState);

    return JSON.parse(serializedState);
  } catch (err) {
    return err;
  }
};
