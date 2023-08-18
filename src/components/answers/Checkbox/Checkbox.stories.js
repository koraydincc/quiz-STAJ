// Checkbox.stories.js
import React from "react";
import Checkbox from "./Checkbox"; // veya componentin yolunu belirtin.

export default {
  title: "Checkbox",
  component: Checkbox,
};

export const Yes = {
  args: {
    label: "Yes",
    type: "checkbox",
  },
};

export const No = {
  args: {
    label: "No",
    type: "checkbox",
  },
};
