import React from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { Landing } from "./screens/Landing";
import { StandardApplication } from "./screens/StandardApp";
import { CustomerVideo } from "./screens/CustomerVideo";
import { CustomerProcessing } from "./screens/CustomerProcessing";
import { CustomerResults } from "./screens/CustomerResults";
import { AgentLayout } from "./screens/AgentLayout";
import { AgentDashboard } from "./screens/AgentDashboard";
import { AgentSession } from "./screens/AgentSession";
import { AgentPastSessions } from "./screens/AgentPastSessions";
import { AgentRiskAlerts } from "./screens/AgentRiskAlerts";
import { AgentAnalytics } from "./screens/AgentAnalytics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/standard-application",
    Component: StandardApplication,
  },
  {
    path: "/onboarding/video",
    Component: CustomerVideo,
  },
  {
    path: "/onboarding/processing",
    Component: CustomerProcessing,
  },
  {
    path: "/onboarding/results",
    Component: CustomerResults,
  },
  {
    path: "/agent",
    Component: AgentLayout,
    children: [
      {
        index: true,
        Component: AgentDashboard,
      },
      {
        path: "session/:id",
        Component: AgentSession,
      },
      {
        path: "past",
        Component: AgentPastSessions,
      },
      {
        path: "alerts",
        Component: AgentRiskAlerts,
      },
      {
        path: "analytics",
        Component: AgentAnalytics,
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);
