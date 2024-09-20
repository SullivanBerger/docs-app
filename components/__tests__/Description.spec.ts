import { describe, expect, it } from "vitest";

import { shallowMount } from "@vue/test-utils";
import Description from "../content/Description.vue";

describe("Description", () => {
  it("renders properly", () => {
    const wrapper = shallowMount(Description, {
      slots: {
        default: "This is a description",
      },
    });
    expect(wrapper.text()).toContain("This is a description");
    expect(wrapper.html()).toMatchInlineSnapshot(`"<p class="mb-4 text-lg text-slate-500">This is a description</p>"`);
  });
});
