export const useClassName = () => {
  const multiple = (...classnames: string[]): string => {
    return classnames.join(' ');
  };

  return {
    multiple,
  };
};
