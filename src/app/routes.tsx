import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home.tsx";
import { Tasks } from "./pages/Tasks.tsx";
import { TaskDetail } from "./pages/TaskDetail.tsx";
import { Files } from "./pages/Files.tsx";
import { Chat } from "./pages/Chat.tsx";
import { TextChat } from "./pages/TextChat.tsx";
import { BrainDumpHistory } from "./pages/BrainDumpHistory.tsx";
import { Connections } from "./pages/Connections.tsx";
import { Voice } from "./pages/Voice.tsx";
import { Profile } from "./pages/Profile.tsx";
import { Language } from "./pages/Language.tsx";
import { FAQ } from "./pages/FAQ.tsx";
import { Terms } from "./pages/Terms.tsx";
import { Privacy } from "./pages/Privacy.tsx";
import { About } from "./pages/About.tsx";
import { Plan } from "./pages/Plan.tsx";
import { UpgradePlan } from "./pages/UpgradePlan.tsx";
import { Payment } from "./pages/Payment.tsx";
import { SubscriptionSuccess } from "./pages/SubscriptionSuccess.tsx";
import { Flows } from "./pages/Flows.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/tasks",
    Component: Tasks,
  },
  {
    path: "/tasks/:id",
    Component: TaskDetail,
  },
  {
    path: "/files",
    Component: Files,
  },
  {
    path: "/chat",
    Component: Chat,
  },
  {
    path: "/text-chat",
    Component: TextChat,
  },
  {
    path: "/brain-dump-history",
    Component: BrainDumpHistory,
  },
  {
    path: "/connections",
    Component: Connections,
  },
  {
    path: "/voice",
    Component: Voice,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/language",
    Component: Language,
  },
  {
    path: "/faq",
    Component: FAQ,
  },
  {
    path: "/terms",
    Component: Terms,
  },
  {
    path: "/privacy",
    Component: Privacy,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/plan",
    Component: Plan,
  },
  {
    path: "/upgrade-plan",
    Component: UpgradePlan,
  },
  {
    path: "/payment",
    Component: Payment,
  },
  {
    path: "/subscription-success",
    Component: SubscriptionSuccess,
  },
  {
    path: "/flows",
    Component: Flows,
  },
]);
