import * as React from 'react';
import { css, cx } from '@emotion/css';
import type { ReactNode } from 'react';
import '../styles.css';

export interface TreeNodeProps {
    /**
     * The node label
     * */
    label: React.ReactNode;
    className?: string;
    children?: ReactNode;
}

const verticalLine = css`
    content: '';
    position: absolute;
    top: 0;
    height: var(--tree-line-height);
    box-sizing: border-box;
`;

const boxContent = css`
    position: relative;
    padding: 18px 0 0;
    margin: 0 5px;
    border: 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #f6f6f6;
    overflow: hidden;
    border: 1px solid #000;
`;

const childrenContainer = css`
    display: flex;
    padding-inline-start: 0;
    margin: 0;
    padding-top: var(--tree-line-height);
    position: relative;
        //
    ::before {
        ${verticalLine};
        left: calc(50% - var(--tree-line-width) / 2);
        width: 0;
        border-left: var(--tree-line-width) var(--tree-node-line-style) var(--tree-line-color);
    }
`;

export const node = css`
    flex: auto;
    text-align: center;
    list-style-type: none;
    position: relative;
    padding: var(--tree-line-height) var(--tree-node-padding) 0 var(--tree-node-padding);
`;

export const nodeLines = css`
    ::before,
    ::after {
        ${verticalLine};
        right: 50%;
        width: 50%;
        border-top: var(--tree-line-width) var(--tree-node-line-style) var(--tree-line-color);
    }

    ::after {
        left: 50%;
        border-left: var(--tree-line-width) var(--tree-node-line-style) var(--tree-line-color);
    }

    :only-of-type {
        padding: 0;

        ::after,
        :before {
            display: none;
        }
    }

    :first-of-type {
        ::before {
            border: 0 none;
        }

        ::after {
            border-radius: var(--tree-line-border-radius) 0 0 0;
        }
    }

    :last-of-type {
        ::before {
            border-right: var(--tree-line-width) var(--tree-node-line-style) var(--tree-line-color);
            border-radius: 0 var(--tree-line-border-radius) 0 0;
        }

        ::after {
            border: 0 none;
        }
    }
`;

function TreeNode({children, label, className}: TreeNodeProps) {
    return (
        <li className={cx(node, nodeLines, className)}>
            {label}
            {React.Children.count(children) > 0 && (
                <ul className={childrenContainer}>{children}</ul>
                //   <ul className='childrenContainer'>{children}</ul>
            )}
        </li>
    );
}

export default TreeNode;
