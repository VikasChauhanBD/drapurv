// import { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function useSectionRoute(sectionIds) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const id = entry.target.id;

//             if (id && location.pathname !== `/${id}`) {
//               navigate(`/${id}`, { replace: true });
//             }
//           }
//         });
//       },
//       { threshold: 0.6 } // 60% visible = active section
//     );

//     sectionIds.forEach((id) => {
//       const el = document.getElementById(id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [sectionIds, navigate, location.pathname]);
// }

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useSectionRoute(sectionIds) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only run the observer for home page routes (/ or /:sectionId)
    const isHomePage =
      location.pathname === "/" ||
      sectionIds.some((id) => location.pathname === `/${id}`);

    if (!isHomePage) {
      return; // Don't observe if we're on a different page like /testing
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            // Only update URL if we're still on a home page route
            if (id && location.pathname !== `/${id}` && isHomePage) {
              navigate(`/${id}`, { replace: true });
            }
          }
        });
      },
      { threshold: 0.6 } // 60% visible = active section
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, navigate, location.pathname]);
}
