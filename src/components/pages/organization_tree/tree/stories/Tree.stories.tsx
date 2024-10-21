// "use client";
// import { css } from "@emotion/css";

// import React from "react";
// import { StoryFn, Meta } from "@storybook/react";
// import { Tree, TreeNode, TreeProps } from "../index";
// import exp from "node:constants";
// import { NodeContent } from "../components/nodeContent";
// import { SponsorResponseType } from "@/services/api/users/type";
// import noop from "noop-ts";
// import PAGE_ROUTES from "@/utils/constants/routes";
// import { router } from "next/client";
// import { useRouter } from "next/navigation";

// // export default {
// //     title: 'Example/Tree',
// //     component: Tree,
// //     argTypes: {
// //         label: {control: 'string'},
// //         lineColor: {control: 'color'},
// //     },
// // } as Meta;

// // export const Basic: StoryFn<TreeProps> = (args) => (
// //     // eslint-disable-next-line react/no-children-prop
// //     <Tree {...args} children={<ul>getNodes()</ul>}/>
// // );
// // Basic.args = {
// //     label: 'Root',
// // };

// export const Styled: StoryFn<TreeProps> = (args: any) => (
//   // eslint-disable-next-line react/no-children-prop
//   <Tree {...args} children={GetNodes("div", args)} />
// );

// Styled.args = {
//   label: "Root",
//   lineWidth: "3px",
//   lineColor: "green",
//   lineBorderRadius: "10px",
//   lineHeight: "30px",
//   lineStyle: "dotted",
// };

// // @ts-ignore
// export const StyledNodes: StoryFn<TreeProps> = ({ label, data, ...args }) => (
//   <Tree
//     label={<StyledNode>{label}</StyledNode>}
//     {...args}
//     /* eslint-disable-next-line react/no-children-prop */
//     children={GetNodes(StyledNode, data)}
//   />
// );

// StyledNodes.args = {
//   label: "Root",
// };

// export const StyledNode = ({ children }: React.PropsWithChildren<{}>) => {
//   return (
//     // <div
//     // //     className={css`
//     // //   padding: 5px;
//     // //   border-radius: 8px;
//     // //   display: inline-block;
//     // //   border: 1px solid #ff0000;
//     // // `}
//     //     className='styleNode'
//     // >
//     <div>{children}</div>
//   );
// };

// export const GetNodes = (
//   Label: React.ElementType = "div",
//   data: SponsorResponseType[] = []
// ) => {
//   const router = useRouter();
//   const handleClick = (id: number) => {
//     router.push(PAGE_ROUTES.USERS.USER_MODIFY + "?id=" + id);
//   };
//   return (
//     <>
//       {data.map((item, index) => (
//         <TreeNode
//           key={index}
//           label={
//             <Label>
//               <NodeContent
//                 id={item.id || 1}
//                 name={item.name}
//                 memberId={item.member_id}
//                 level={item.level}
//                 createdAt={item.createdAt?.substring(0, 10)}
//                 onClickHandle={handleClick}
//               />
//             </Label>
//           }
//         >
//           {item.children?.length && item.children?.length > 0
//             ? GetNodes(StyledNode, item?.children)
//             : undefined}
//         </TreeNode>
//       ))}
//     </>
//   );
//   // return [
//   //     // eslint-disable-next-line react/jsx-key
//   //     <TreeNode label={
//   //         <Label>
//   //             <NodeContent name={'Ashley Young'} memberId={'2000'} level={'정회원'} onClickHandle={handleClick}/>
//   //         </Label>}
//   //     >
//   //         <TreeNode label={
//   //             <Label>
//   //                 <NodeContent/>
//   //             </Label>}
//   //         >
//   //             <TreeNode label={
//   //                 <Label>
//   //                     <NodeContent/>
//   //                 </Label>}
//   //             >
//   //                 <TreeNode label={
//   //                     <Label>
//   //                         <NodeContent/>
//   //                     </Label>}
//   //                 >
//   //                     <TreeNode label={
//   //                         <Label>
//   //                             <NodeContent/>
//   //                         </Label>}
//   //                     />
//   //                     <TreeNode label={
//   //                         <Label>
//   //                             <NodeContent/>
//   //                         </Label>}
//   //                     >
//   //                         <TreeNode label={
//   //                             <Label>
//   //                                 <NodeContent/>
//   //                             </Label>}
//   //                         >
//   //                             <TreeNode label={
//   //                                 <Label>
//   //                                     <NodeContent/>
//   //                                 </Label>}
//   //                             />
//   //                             <TreeNode label={
//   //                                 <Label>
//   //                                     <NodeContent/>
//   //                                 </Label>}
//   //                             />
//   //                         </TreeNode>,
//   //                     </TreeNode>
//   //                 </TreeNode>,
//   //             </TreeNode>
//   //         </TreeNode>
//   //     </TreeNode>,
//   //     // eslint-disable-next-line react/jsx-key
//   //     <TreeNode label={
//   //         <Label>
//   //             <NodeContent/>
//   //         </Label>}
//   //     >
//   //         <TreeNode label={
//   //             <Label>
//   //                 <NodeContent/>
//   //             </Label>}
//   //         >
//   //             <TreeNode label={
//   //                 <Label>
//   //                     <NodeContent/>
//   //                 </Label>}
//   //             />
//   //             <TreeNode label={
//   //                 <Label>
//   //                     <NodeContent/>
//   //                 </Label>}
//   //             >
//   //                 <TreeNode label={
//   //                     <Label>
//   //                         <NodeContent/>
//   //                     </Label>}
//   //                 >
//   //                     <TreeNode label={
//   //                         <Label>
//   //                             <NodeContent/>
//   //                         </Label>}
//   //                     />
//   //                     <TreeNode label={
//   //                         <Label>
//   //                             <NodeContent/>
//   //                         </Label>}
//   //                     >
//   //                         <TreeNode label={
//   //                             <Label>
//   //                                 <NodeContent/>
//   //                             </Label>}
//   //                         />
//   //                         <TreeNode label={
//   //                             <Label>
//   //                                 <NodeContent/>
//   //                             </Label>}
//   //                         >
//   //                             <TreeNode label={
//   //                                 <Label>
//   //                                     <NodeContent/>
//   //                                 </Label>}
//   //                             />
//   //                             <TreeNode label={
//   //                                 <Label>
//   //                                     <NodeContent/>
//   //                                 </Label>}
//   //                             >
//   //                                 <TreeNode label={
//   //                                     <Label>
//   //                                         <NodeContent/>
//   //                                     </Label>}
//   //                                 />
//   //                                 <TreeNode label={
//   //                                     <Label>
//   //                                         <NodeContent/>
//   //                                     </Label>}
//   //                                 />
//   //                             </TreeNode>
//   //                         </TreeNode>
//   //                     </TreeNode>
//   //                 </TreeNode>,
//   //             </TreeNode>
//   //         </TreeNode>
//   //     </TreeNode>,
//   //
//   // ];
// };

"use client";
import { css } from "@emotion/css";

import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Tree, TreeNode, TreeProps } from "../index";
import exp from "node:constants";
import { NodeContent } from "../components/nodeContent";
import { SponsorResponseType } from "@/services/api/users/type";
import noop from "noop-ts";
import PAGE_ROUTES from "@/utils/constants/routes";
import { router } from "next/client";
import { useRouter } from "next/navigation";

// export default {
//     title: 'Example/Tree',
//     component: Tree,
//     argTypes: {
//         label: {control: 'string'},
//         lineColor: {control: 'color'},
//     },
// } as Meta;

// export const Basic: StoryFn<TreeProps> = (args) => (
//     // eslint-disable-next-line react/no-children-prop
//     <Tree {...args} children={<ul>getNodes()</ul>}/>
// );
// Basic.args = {
//     label: 'Root',
// };

export const Styled: StoryFn<TreeProps> = (args: any) => (
  // eslint-disable-next-line react/no-children-prop
  <Tree {...args} children={GetNodes("div", args)} />
);

Styled.args = {
  label: "Root",
  lineWidth: "3px",
  lineColor: "green",
  lineBorderRadius: "10px",
  lineHeight: "30px",
  lineStyle: "dotted",
};

// @ts-ignore
export const StyledNodes: StoryFn<TreeProps> = ({ label, data, ...args }) => (
  <Tree
    label={<StyledNode>{label}</StyledNode>}
    {...args}
    /* eslint-disable-next-line react/no-children-prop */
    children={GetNodes(StyledNode, data)}
  />
);

StyledNodes.args = {
  label: "Root",
};

export const StyledNode = ({ children }: React.PropsWithChildren<{}>) => {
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
    <div>{children}</div>
  );
};

export const GetNodes = (
  Label: React.ElementType = "div",
  data: SponsorResponseType[] = []
) => {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(PAGE_ROUTES.USERS.USER_MODIFY + "?id=" + id);
  };
  return (
    <>
      {data.map((item, index) => (
        <TreeNode
          key={index}
          label={
            <Label>
              <NodeContent
                id={item.id || 1}
                name={item.name}
                memberId={item.member_id}
                level={item.level}
                createdAt={item.createdAt?.substring(0, 10)}
                onClickHandle={handleClick}
              />
            </Label>
          }
        >
          {item.children?.length && item.children?.length > 0
            ? GetNodes(StyledNode, item?.children)
            : undefined}
        </TreeNode>
      ))}
    </>
  );
  // return [
  //     // eslint-disable-next-line react/jsx-key
  //     <TreeNode label={
  //         <Label>
  //             <NodeContent name={'Ashley Young'} memberId={'2000'} level={'정회원'} onClickHandle={handleClick}/>
  //         </Label>}
  //     >
  //         <TreeNode label={
  //             <Label>
  //                 <NodeContent/>
  //             </Label>}
  //         >
  //             <TreeNode label={
  //                 <Label>
  //                     <NodeContent/>
  //                 </Label>}
  //             >
  //                 <TreeNode label={
  //                     <Label>
  //                         <NodeContent/>
  //                     </Label>}
  //                 >
  //                     <TreeNode label={
  //                         <Label>
  //                             <NodeContent/>
  //                         </Label>}
  //                     />
  //                     <TreeNode label={
  //                         <Label>
  //                             <NodeContent/>
  //                         </Label>}
  //                     >
  //                         <TreeNode label={
  //                             <Label>
  //                                 <NodeContent/>
  //                             </Label>}
  //                         >
  //                             <TreeNode label={
  //                                 <Label>
  //                                     <NodeContent/>
  //                                 </Label>}
  //                             />
  //                             <TreeNode label={
  //                                 <Label>
  //                                     <NodeContent/>
  //                                 </Label>}
  //                             />
  //                         </TreeNode>,
  //                     </TreeNode>
  //                 </TreeNode>,
  //             </TreeNode>
  //         </TreeNode>
  //     </TreeNode>,
  //     // eslint-disable-next-line react/jsx-key
  //     <TreeNode label={
  //         <Label>
  //             <NodeContent/>
  //         </Label>}
  //     >
  //         <TreeNode label={
  //             <Label>
  //                 <NodeContent/>
  //             </Label>}
  //         >
  //             <TreeNode label={
  //                 <Label>
  //                     <NodeContent/>
  //                 </Label>}
  //             />
  //             <TreeNode label={
  //                 <Label>
  //                     <NodeContent/>
  //                 </Label>}
  //             >
  //                 <TreeNode label={
  //                     <Label>
  //                         <NodeContent/>
  //                     </Label>}
  //                 >
  //                     <TreeNode label={
  //                         <Label>
  //                             <NodeContent/>
  //                         </Label>}
  //                     />
  //                     <TreeNode label={
  //                         <Label>
  //                             <NodeContent/>
  //                         </Label>}
  //                     >
  //                         <TreeNode label={
  //                             <Label>
  //                                 <NodeContent/>
  //                             </Label>}
  //                         />
  //                         <TreeNode label={
  //                             <Label>
  //                                 <NodeContent/>
  //                             </Label>}
  //                         >
  //                             <TreeNode label={
  //                                 <Label>
  //                                     <NodeContent/>
  //                                 </Label>}
  //                             />
  //                             <TreeNode label={
  //                                 <Label>
  //                                     <NodeContent/>
  //                                 </Label>}
  //                             >
  //                                 <TreeNode label={
  //                                     <Label>
  //                                         <NodeContent/>
  //                                     </Label>}
  //                                 />
  //                                 <TreeNode label={
  //                                     <Label>
  //                                         <NodeContent/>
  //                                     </Label>}
  //                                 />
  //                             </TreeNode>
  //                         </TreeNode>
  //                     </TreeNode>
  //                 </TreeNode>,
  //             </TreeNode>
  //         </TreeNode>
  //     </TreeNode>,
  //
  // ];
};
