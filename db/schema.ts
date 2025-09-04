import { defineTable } from "apps/records/mod.ts";

export const ContactForm = defineTable({
  name: "contact_form",
  columns: {
    id: {
      type: "serial",
      primaryKey: true,
    },
    name: {
      type: "varchar",
      length: 255,
      nullable: false,
    },
    email: {
      type: "varchar", 
      length: 255,
      nullable: false,
    },
    message: {
      type: "text",
      nullable: false,
    },
    created_at: {
      type: "timestamp",
      default: "now()",
    },
  },
});
