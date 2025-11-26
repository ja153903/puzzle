import type { BinarySearchTreeNode } from "@/lib/binary-search-tree";
import type { BinaryTreeNode } from "@/lib/binary-tree";

export type BinaryTree<T> = BinaryTreeNode<T> | BinarySearchTreeNode<T>;
