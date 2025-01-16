import GuideDetailPage from "./pages/GuideDetailPage";
import VideoPage from "./pages/VideoPage";
import Guides from "./pages/Guides";
import {HomePage} from "./pages/HomePage";
import GuidePage from "./pages/GuidePage";

export const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/guides', element: <Guides /> },
    { path: '/video/:category', element: <VideoPage /> },
    { path: '/guides/:category', element: <GuidePage /> },
    { path: '/guides/:category/:id', element: <GuideDetailPage /> },
];