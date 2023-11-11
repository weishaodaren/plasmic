// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dyzP6dbCdycwJpqiR2zkwe
// Component: X5avWz1hNF
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_docs_portal.module.css"; // plasmic-import: dyzP6dbCdycwJpqiR2zkwe/projectcss
import sty from "./PlasmicCodePreviewSnippet.module.css"; // plasmic-import: X5avWz1hNF/css

export type PlasmicCodePreviewSnippet__VariantMembers = {};

export type PlasmicCodePreviewSnippet__VariantsArgs = {};
type VariantPropType = keyof PlasmicCodePreviewSnippet__VariantsArgs;
export const PlasmicCodePreviewSnippet__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCodePreviewSnippet__ArgsType = {
  title?: React.ReactNode;
  info?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCodePreviewSnippet__ArgsType;
export const PlasmicCodePreviewSnippet__ArgProps = new Array<ArgPropType>(
  "title",
  "info"
);

export type PlasmicCodePreviewSnippet__OverridesType = {
  root?: p.Flex<"div">;
  viewport?: p.Flex<"div">;
  editor?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultCodePreviewSnippetProps {
  title?: React.ReactNode;
  info?: React.ReactNode;
  className?: string;
}

export const defaultCodePreviewSnippet__Args: Partial<PlasmicCodePreviewSnippet__ArgsType> =
  {};

function PlasmicCodePreviewSnippet__RenderFunc(props: {
  variants: PlasmicCodePreviewSnippet__VariantsArgs;
  args: PlasmicCodePreviewSnippet__ArgsType;
  overrides: PlasmicCodePreviewSnippet__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultCodePreviewSnippet__Args, props.args);
  const $props = args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__edkBc)}>
        {p.renderPlasmicSlot({
          defaultContents: "Component Name",
          value: args.title,
          className: classNames(sty.slotTargetTitle),
        })}

        <div className={classNames(projectcss.all, sty.freeBox__j4W4B)}>
          {p.renderPlasmicSlot({
            defaultContents: "",
            value: args.info,
            className: classNames(sty.slotTargetInfo),
          })}
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___5Chei)}
      >
        <div
          data-plasmic-name={"viewport"}
          data-plasmic-override={overrides.viewport}
          className={classNames(projectcss.all, sty.viewport)}
        />

        <div
          data-plasmic-name={"editor"}
          data-plasmic-override={overrides.editor}
          className={classNames(projectcss.all, sty.editor)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {
              'function App() {\n  const onSubmit = (e) => {\n    e.preventDefault();\n    const data = new FormData(e.target);\n    console.log("Form data", data);\n  };\n  return (\n    <form onSubmit={onSubmit}>\n      <Checkbox defaultChecked={true}>Test label</Checkbox>\n    </form>\n  );\n}'
            }
          </div>
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "viewport", "editor", "text"],
  viewport: ["viewport"],
  editor: ["editor", "text"],
  text: ["text"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  viewport: "div";
  editor: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCodePreviewSnippet__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicCodePreviewSnippet__VariantsArgs;
  args?: PlasmicCodePreviewSnippet__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicCodePreviewSnippet__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicCodePreviewSnippet__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCodePreviewSnippet__ArgProps,
      internalVariantPropNames: PlasmicCodePreviewSnippet__VariantProps,
    });

    return PlasmicCodePreviewSnippet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCodePreviewSnippet";
  } else {
    func.displayName = `PlasmicCodePreviewSnippet.${nodeName}`;
  }
  return func;
}

export const PlasmicCodePreviewSnippet = Object.assign(
  // Top-level PlasmicCodePreviewSnippet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    viewport: makeNodeComponent("viewport"),
    editor: makeNodeComponent("editor"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicCodePreviewSnippet
    internalVariantProps: PlasmicCodePreviewSnippet__VariantProps,
    internalArgProps: PlasmicCodePreviewSnippet__ArgProps,
  }
);

export default PlasmicCodePreviewSnippet;
/* prettier-ignore-end */