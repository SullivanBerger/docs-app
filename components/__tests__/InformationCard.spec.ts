import { afterEach, beforeEach, describe, expect, it } from "vitest";

import type { VueWrapper } from "@vue/test-utils";
import { flushPromises, mount } from "@vue/test-utils";
import InformationCard from "~/components/content/InformationCard.vue";

describe("InformationCard", () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(() => {
    wrapper = mount(InformationCard, {
      props: {
        title: "This is a title",
        description: "This is a description",
        content: "This is a content",
      },
    });
  });

  afterEach(() => {
    wrapper!.unmount();
  });

  it("initializes with correct elements", () => {
    expect(wrapper?.findAll("h3").length).toEqual(1);
    expect(wrapper?.findAll("p").length).toEqual(1);
    expect(wrapper!.html()).toMatchInlineSnapshot(`
      "<div class="rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50">
        <div class="flex flex-col gap-y-1.5 p-6">
          <h3 class="text-2xl font-semibold leading-none tracking-tight">This is a title</h3>
          <p class="text-sm text-neutral-500 dark:text-neutral-400">This is a description</p>
        </div>
        <div class="p-6 pt-0">This is a content</div>
      </div>"
    `);
  });

  it("accepts valid props data", async () => {
    wrapper?.setProps({
      title: "This is another title",
      description: "This is another description",
      content: "This is another content",
    });

    await flushPromises();

    expect(wrapper?.findAll("h3").length).toEqual(1);
    expect(wrapper?.findAll("p").length).toEqual(1);
    expect(wrapper!.html()).toMatchInlineSnapshot(`
      "<div class="rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50">
        <div class="flex flex-col gap-y-1.5 p-6">
          <h3 class="text-2xl font-semibold leading-none tracking-tight">This is another title</h3>
          <p class="text-sm text-neutral-500 dark:text-neutral-400">This is another description</p>
        </div>
        <div class="p-6 pt-0">This is another content</div>
      </div>"
    `);
  });
});
