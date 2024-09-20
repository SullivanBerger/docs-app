import { afterEach, beforeEach, describe, expect, it } from "vitest";

import type { VueWrapper } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import ProseH1 from "~/components/content/ProseH1.vue";

describe("ProseH1", () => {
  let wrapper: VueWrapper | null = null;

  beforeEach(() => {
    wrapper = mount(ProseH1, {
      slots: {
        default: "This is a title",
      },
    });
  });

  afterEach(() => {
    wrapper?.unmount();
  });

  it("renders properly without an id", () => {
    expect(wrapper!.text()).toContain("This is a title");
  });
});
