import * as React from 'react';
import { css } from '@emotion/css';

import TreeNode, { TreeNodeProps } from './TreeNode';

type LineStyle = 'dashed' | 'dotted' | 'double' | 'solid' | string;

export interface TreeProps {
  /**
   * The root label
   * */
  label: TreeNodeProps['label'];
  /**
   * The height of the line
   */
  lineHeight?: string;
  /**
   * The width of the line
   */
  lineWidth?: string;
  /**
   * The color of the line
   */
  lineColor?: string;
  /**
   * The line style for the tree
   */
  lineStyle?: 'dashed' | 'dotted' | 'double' | 'solid' | string;
  /**
   * The border radius of the line
   */
  lineBorderRadius?: string;
  /**
   * The padding between siblings
   */
  nodePadding?: string;
  children: TreeNodeProps['children'];
}

/**
 * The root of the hierarchy tree
 */
export const Tree = ({
  children,
  label,
  lineHeight = '20px',
  lineWidth = '1px',
  lineColor = 'white',
  nodePadding = '5px',
  lineStyle = 'solid',
  lineBorderRadius = '5px',
}: TreeProps) => {
  return (
    <ul
      // className={css`
      //   padding-inline-start: 0;
      //   margin: 0;
      //   display: flex;
      //
      //   --line-height: ${lineHeight};
      //   --line-width: ${lineWidth};
      //   --line-color: ${lineColor};
      //   --line-border-radius: ${lineBorderRadius};
      //   --line-style: ${lineStyle};
      //   --node-padding: ${nodePadding};
      //
      //   --tree-line-height: 20px;
      //   --tree-line-width: 1px;
      //   --tree-line-color: white;
      //   --tree-line-border-radius: 5px;
      //   --tree-node-line-style: solid;
      //   --tree-node-padding: 5px;
      // `}
        className='treeNode'
    >
      <TreeNode label={label}>{children}</TreeNode>
    </ul>
  );
}

export default Tree;
