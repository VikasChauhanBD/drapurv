import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useSectionRoute(sectionIds) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            if (id && location.pathname !== `/${id}`) {
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
