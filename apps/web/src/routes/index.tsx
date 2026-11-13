import { createFileRoute, redirect } from "@tanstack/react-router";

/** The ITA scorecard prototype is a self-contained static page. */
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    // oxlint-disable-next-line typescript/only-throw-error -- TanStack Router's redirect is thrown, by design
    throw redirect({ href: "/scorecard.html", replace: true });
  },
});
