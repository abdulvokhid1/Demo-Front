import { css } from '@emotion/css';

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Tree, TreeNode, TreeProps } from '../index';
import exp from "node:constants";
import { NodeContent } from "../components/nodeContent";

export default {
    title: 'Example/Tree',
    component: Tree,
    argTypes: {
        label: {control: 'string'},
        lineColor: {control: 'color'},
    },
} as Meta;

export const Basic: StoryFn<TreeProps> = (args) => (
    // eslint-disable-next-line react/no-children-prop
    <Tree {...args} children={<ul>getNodes()</ul>}/>
);
Basic.args = {
    label: 'Root',
};

export const Styled: StoryFn<TreeProps> = (args) => (
    // eslint-disable-next-line react/no-children-prop
    <Tree {...args} children={getNodes()}/>
);

Styled.args = {
    label: 'Root',
    lineWidth: '3px',
    lineColor: 'green',
    lineBorderRadius: '10px',
    lineHeight: '30px',
    lineStyle: 'dotted',
};

export const StyledNodes: StoryFn<TreeProps> = ({label, ...args}) => (
    <Tree
        label={<StyledNode>{label}</StyledNode>}
        {...args}
        /* eslint-disable-next-line react/no-children-prop */
        children={getNodes(StyledNode)}
    />
);

StyledNodes.args = {
    label: 'Root',
};

export const StyledNode = ({children}: React.PropsWithChildren<{}>) => {
    return (
        // <div
        // //     className={css`
        // //   padding: 5px;
        // //   border-radius: 8px;
        // //   display: inline-block;
        // //   border: 1px solid #ff0000;
        // // `}
        //     className='styleNode'
        // >
        <div>
            {children}
        </div>
    )
        ;
}

export const getNodes = (Label: React.ElementType = 'div') => {
    return [
        // eslint-disable-next-line react/jsx-key
        <TreeNode label={
            <Label>
                <NodeContent/>
            </Label>}
        >
            <TreeNode label={
                <Label>
                    <NodeContent/>
                </Label>}
            >
                <TreeNode label={
                    <Label>
                        <NodeContent/>
                    </Label>}
                >
                    <TreeNode label={
                        <Label>
                            <NodeContent/>
                        </Label>}
                    >
                        <TreeNode label={
                            <Label>
                                <NodeContent/>
                            </Label>}
                        />
                        <TreeNode label={
                            <Label>
                                <NodeContent/>
                            </Label>}
                        >
                            <TreeNode label={
                                <Label>
                                    <NodeContent/>
                                </Label>}
                            >
                                <TreeNode label={
                                    <Label>
                                        <NodeContent/>
                                    </Label>}
                                />
                                <TreeNode label={
                                    <Label>
                                        <NodeContent/>
                                    </Label>}
                                />
                            </TreeNode>,
                        </TreeNode>
                    </TreeNode>,
                </TreeNode>
            </TreeNode>
        </TreeNode>,
        // eslint-disable-next-line react/jsx-key
        <TreeNode label={
            <Label>
                <NodeContent/>
            </Label>}
        >
            <TreeNode label={
                <Label>
                    <NodeContent/>
                </Label>}
            >
                <TreeNode label={
                    <Label>
                        <NodeContent/>
                    </Label>}
                />
                <TreeNode label={
                    <Label>
                        <NodeContent/>
                    </Label>}
                >
                    <TreeNode label={
                        <Label>
                            <NodeContent/>
                        </Label>}
                    >
                        <TreeNode label={
                            <Label>
                                <NodeContent/>
                            </Label>}
                        />
                        <TreeNode label={
                            <Label>
                                <NodeContent/>
                            </Label>}
                        >
                            <TreeNode label={
                                <Label>
                                    <NodeContent/>
                                </Label>}
                            />
                            <TreeNode label={
                                <Label>
                                    <NodeContent/>
                                </Label>}
                            >
                                <TreeNode label={
                                    <Label>
                                        <NodeContent/>
                                    </Label>}
                                />
                                <TreeNode label={
                                    <Label>
                                        <NodeContent/>
                                    </Label>}
                                >
                                    <TreeNode label={
                                        <Label>
                                            <NodeContent/>
                                        </Label>}
                                    />
                                    <TreeNode label={
                                        <Label>
                                            <NodeContent/>
                                        </Label>}
                                    />
                                </TreeNode>
                            </TreeNode>
                        </TreeNode>
                    </TreeNode>,
                </TreeNode>
            </TreeNode>
        </TreeNode>,

    ];
}
