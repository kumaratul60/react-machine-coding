const useTraverseTree = () => {
  // Add a file or folder in tree
  // Can be optimized using Dynamic Programming

  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        name: item,
        isFolder: isFolder,
        items: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const deleteNode = () => {}; // Do it Yourself

  const renameNode = () => {}; // Do it Yourself

  return { insertNode, deleteNode, renameNode };
};

export default useTraverseTree;
