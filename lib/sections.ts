export type Section = {
  id: string;
  num: string;
  title: string;
  meta?: string;
};

export const sections: Section[] = [
  { id: "manual", num: "01", title: "Field Manual", meta: "Overview" },
  { id: "pre-brief", num: "02", title: "Pre-Meeting Brief", meta: "24–48 H" },
  { id: "pulse-check", num: "03", title: "Pulse Check", meta: "8–10 MIN" },
  { id: "signals", num: "04", title: "Engagement Signals", meta: "Embedded" },
  { id: "meeting-flow", num: "05", title: "Meeting Flow", meta: "45–55 MIN" },
  {
    id: "stop-01",
    num: "06",
    title: "Stop 01 · Lifetime Tax Projection",
    meta: "8–10 MIN",
  },
  { id: "bridge", num: "07", title: "The Bridge", meta: "60 SEC · VERBAL" },
  {
    id: "stop-02",
    num: "08",
    title: "Stop 02 · Plan Walkthrough",
    meta: "12–15 MIN",
  },
  { id: "stop-03", num: "09", title: "Stop 03 · The Close", meta: "8–10 MIN" },
  {
    id: "objections",
    num: "10",
    title: "Objection Protocols",
    meta: "AS NEEDED",
  },
  { id: "drift", num: "11", title: "Drift Recovery", meta: "FINAL 5 MIN" },
  { id: "paths", num: "12", title: "Three Paths", meta: "01 / 02 / 03" },
  {
    id: "post-close",
    num: "13",
    title: "Post-Close Roadmap",
    meta: "POST-ENROLLMENT",
  },
];
