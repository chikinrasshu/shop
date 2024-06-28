import { Fragment, ReactNode } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsTriggerProps,
} from "@/components/ui/tab";

function capitalizeFirstLetter(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function TestButtons() {
  const kinds: ButtonProps["kind"][] = ["default", "outline", "ghost"];
  const variants: ButtonProps["variant"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "failure",
  ];

  return (
    <div className="flex flex-col rounded-md border p-2 shadow-md">
      {kinds.map((kind, j) => (
        <Fragment key={`Kind_${j}`}>
          <span className="p-1 text-xl font-semibold">
            {capitalizeFirstLetter(`${kind!} Buttons`)}
          </span>
          <hr className="border-b-1 border-t" />
          <div className="flex flex-col gap-2 px-2 py-1">
            <div className="flex gap-1">
              {variants.map((variant) => (
                <Button key={variant} variant={variant} kind={kind}>
                  {variant}
                </Button>
              ))}
            </div>
            <div className="flex gap-1">
              {variants.map((variant) => (
                <Button key={variant} variant={variant} kind={kind} disabled>
                  {variant}
                </Button>
              ))}
            </div>
            <div className="flex gap-1">
              {variants.map((variant) => (
                <Toggle key={variant} asChild>
                  <Button variant={variant} kind={kind}>
                    {variant}
                  </Button>
                </Toggle>
              ))}
            </div>
            <div className="flex gap-1">
              {variants.map((variant) => (
                <Toggle key={variant} disabled asChild>
                  <Button variant={variant} kind={kind}>
                    {variant}
                  </Button>
                </Toggle>
              ))}
            </div>
            <div className="flex">
              {variants.map((variant, i) => {
                const isFirst = i == 0;
                const isLast = i == variants.length - 1;
                const side = isFirst ? "left" : isLast ? "right" : "middle";

                return (
                  <Button
                    key={variant}
                    variant={variant}
                    side={side}
                    kind={kind}
                  >
                    {variant}
                  </Button>
                );
              })}
            </div>
            <div className="flex">
              {variants.map((variant, i) => {
                const isFirst = i == 0;
                const isLast = i == variants.length - 1;
                const side = isFirst ? "left" : isLast ? "right" : "middle";

                return (
                  <Button
                    key={variant}
                    variant={variant}
                    side={side}
                    kind={kind}
                    disabled
                  >
                    {variant}
                  </Button>
                );
              })}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function TestTabs() {
  const kinds: ButtonProps["kind"][] = ["default", "outline", "ghost"];

  type TabsProps = {
    title: string;
    content: ReactNode;
  } & TabsTriggerProps;

  const tabs1: TabsProps[] = [
    {
      value: "1st",
      title: "First",
      content: "Content of First",
      variant: "default",
    },
    {
      value: "2nd",
      title: "Second",
      content: "Content of Second",
      variant: "primary",
    },
    {
      value: "3rd",
      title: "Third",
      content: "Content of Third",
      variant: "secondary",
    },
    {
      value: "4th",
      title: "Fourth",
      content: "Content of Fourth",
      variant: "success",
      disabled: true,
    },
  ];

  const tabs2: TabsProps[] = [
    {
      value: "5th",
      title: "Fifth",
      content: "Content of Fifth",
      variant: "warning",
    },
    {
      value: "6th",
      title: "Sixth",
      content: "Content of Sixth",
      variant: "failure",
    },
    {
      value: "7th",
      title: "Seventh",
      content: "Content of Seventh",
      variant: "primary",
    },
    {
      value: "8th",
      title: "Eight",
      content: "Content of Eight",
      disabled: true,
    },
  ];

  return (
    <div className="flex flex-col rounded-md border p-2 shadow-md">
      {kinds.map((kind, j) => (
        <Fragment key={`Kind_${j}`}>
          <span className="p-1 text-xl font-semibold">
            {capitalizeFirstLetter(`${kind!} Tabs`)}
          </span>
          <hr className="border-b-1 border-t" />
          <div className="flex flex-wrap gap-1 px-2 py-1">
            <div className="flex flex-1 gap-2">
              <Tabs className="flex-1" defaultValue={tabs1[0].value}>
                <TabsList>
                  {tabs1.map(({ value, title, ...props }) => (
                    <TabsTrigger
                      key={value}
                      value={value}
                      kind={kind}
                      {...props}
                    >
                      {title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {tabs1.map(({ value, content, variant }) => (
                  <TabsContent
                    key={value}
                    className="p-1"
                    value={value}
                    variant={variant}
                  >
                    {content}
                  </TabsContent>
                ))}
              </Tabs>

              <Tabs
                className="flex-1"
                orientation="vertical"
                defaultValue={tabs2[0].value}
              >
                <TabsList>
                  {tabs2.map(({ value, title, ...props }) => (
                    <TabsTrigger
                      key={value}
                      value={value}
                      kind={kind}
                      {...props}
                    >
                      {title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {tabs2.map(({ value, content, variant }) => (
                  <TabsContent
                    key={value}
                    className="p-1"
                    value={value}
                    variant={variant}
                  >
                    {content}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function TestPopovers() {
  return (
    <div className="flex flex-col rounded-md border p-2 shadow-md">
      <span className="p-1 text-xl font-semibold">
        {/*capitalizeFirstLetter(`${kind!} Popovers`)*/ "Popovers"}
      </span>
      <hr className="border-b-1 border-t" />
      <div className="flex flex-wrap gap-1 px-2 py-1">In Construction</div>
    </div>
  );
}

function TestModals() {
  return (
    <div className="flex flex-col rounded-md border p-2 shadow-md">
      <span className="p-1 text-xl font-semibold">
        {/*capitalizeFirstLetter(`${kind!} Modals`)*/ "Modals"}
      </span>
      <hr className="border-b-1 border-t" />
      <div className="flex flex-wrap gap-1 px-2 py-1">In Construction</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-1">
      <span className="p-1 text-2xl font-bold">Component Showcase</span>
      <hr className="border-b-1 border-dashed" />
      {Array.from({ length: 1 }).map((_, i) => (
        <Fragment key={`Item_${i}`}>
          <div className="p-2">
            <TestButtons />
          </div>
          <hr className="border-b-1 border-dashed" />
          <div className="p-2">
            <TestTabs />
          </div>
          <hr className="border-b-1 border-dashed" />
          <div className="p-2">
            <TestPopovers />
          </div>
          <hr className="border-b-1 border-dashed" />
          <div className="p-2">
            <TestModals />
          </div>
        </Fragment>
      ))}
    </div>
  );
}
