import { jwtDecode } from "jwt-decode";
import swal from "sweetalert2";
import React, { useEffect } from "react";
import axios from "axios";

export const colors = {
  pr1: "#114036",
  pr2: "#15af8d",
  pr3: "#e0f5f1",
  se1: "#cdf765",
  se2: "#ffdd6c",
  se3: "#191919",
  se4: "#ffffff",
  se5: "#f3f3f3",
  se6: "#8f9193",
};

export const ActionButton = ({ icon: Icon, label, active, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={styles(
        "cursor-pointer flex items-center gap-2 px-3 py-2 rounded-2xl text-sm font-medium transition",
        active ? "bg-blue-50 text-[#15af8d]" : "hover:bg-gray-100 text-gray-700"
      )}
      aria-pressed={!!active}
      aria-label={label}
    >
      <Icon size={18} />
      <span>{label}</span>
    </span>
  );
};

export const autoGrow = (el) => {
  if (!el) return;
  el.style.height = "0px";
  el.style.height = Math.min(el.scrollHeight, 200) + "px";
};

export const Avatar = ({ src, name, size = 40 }) => {
  const initials = (name || "?")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="h-9 w-9 rounded-full ring-1 ring-slate-300 overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 text-slate-700 font-semibold">
      {src ? (
        <img
          src={src}
          alt={name || "User"}
          className="rounded-full object-cover"
          style={{ width: size, height: size }}
          loading="lazy"
        />
      ) : (
        initials
      )}
    </div>
  );
};

export const capitalize = (str) =>
  str
    .replace(/\s+/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

export const createHandleChange = (setState, options = {}) => {
  const {
    capitalizeFields = [],
    photosKey = "photos",
    previewsKey = "previews",
    multipleFiles = true, // new option
  } = options;

  return (e) => {
    const { files, name, type, value } = e.target;

    if (type === "file") {
      if (!files || files.length === 0) return;
      const newFiles = Array.from(files);

      setState((prev) => {
        const existing = prev[photosKey] || [];

        let updatedFiles;
        if (multipleFiles) {
          // keep existing + unique new files
          const uniqueFiles = newFiles.filter(
            (file) =>
              !existing.some(
                (f) => f.name === file.name && f.size === file.size
              )
          );
          updatedFiles = [...existing, ...uniqueFiles];
        } else {
          // only keep the last selected file
          updatedFiles = newFiles.slice(-1);
        }

        const previews = updatedFiles.map((file) => ({
          fileType: file.type,
          preview: URL.createObjectURL(file),
        }));

        return {
          ...prev,
          [photosKey]: updatedFiles,
          [previewsKey]: previews,
        };
      });
    } else {
      let newValue = value;

      if (capitalizeFields.includes(name)) {
        newValue = capitalize(value);
      }

      setState((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    }
  };
};

export const Expandable = ({
  visible = false,
  height = "auto",
  children,
  className = "",
}) => {
  const baseClasses =
    "overflow-hidden transition-all duration-500 ease-in-out mt-2";
  const stateClasses = visible ? "h-0 p-0 opacity-0" : `opacity-100`;

  return (
    <div
      className={`${baseClasses} ${stateClasses} ${className}`}
      style={{ height: visible ? "0px" : height }}
    >
      {children}
    </div>
  );
};

export const fetchData = (endpoints, setters, deps = []) => {
  useEffect(() => {
    const loadData = async () => {
      try {
        const responses = await Promise.all(
          endpoints.map((ep) => axios.get(`http://localhost:3000/${ep}`))
        );

        // apply responses to setters in order
        responses.forEach((res, i) => setters[i](res.data));
      } catch (error) {
        handleAxiosError(error, toast);
      }
    };

    loadData();
  }, deps); // you can pass dependencies if needed
};

const getStoredToken = () => {
  return localStorage.getItem("token") || sessionStorage.getItem("token");
};

export const getUser = (users, id) => {
  const user = users.find((u) => u.id === id);

  if (!user) return null;

  const { fname, oname, lname } = user || {};
  return {
    name: [fname, oname, lname].filter(Boolean).join(" "),
    ...user,
  };
};

export const getUserFromToken = () => {
  const token = getStoredToken();
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
};

export const handleAxiosError = (err, toast) => {
  if (err.response) {
    console.error(err.response.data?.error || err.response);
    toast({ title: err.response.data?.error || "Something went wrong" });
  } else if (err.request) {
    console.error("No response received:", err.request);
    toast({ title: "No response received" });
  } else {
    console.error("Axios error:", err);
    toast({ title: "Axios error" });
  }
};

export const MasonryLayout = ({ children, gap = "gap-4" }) => {
  const itemCount = React.Children.count(children);
  const columnCount = Math.min(itemCount, 3); // Max 3 columns

  const columnClasses = {
    1: "columns-1",
    2: "columns-1 sm:columns-2",
    3: "columns-1 sm:columns-2 md:columns-3",
  };

  return (
    <div className={`${columnClasses[columnCount]} ${gap}`}>{children}</div>
  );
};

export const styles = (...xs) => {
  return xs.filter(Boolean).join(" ");
};

export const timeAgo = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  const now = new Date();
  const diff = (Date.now() - d.getTime()) / 1000;
  const diffDays = Math.floor(diff / 86400);

  if (diff < 60) return `${Math.max(1, Math.floor(diff))}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;

  const time = d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  // ✅ Yesterday case
  if (diffDays === 1) {
    return `Yesterday at ${time}`;
  }

  // ✅ Within the past week → n days ago
  if (diffDays < 7) {
    const day = d.toLocaleDateString("en-GB", { weekday: "short" });
    return `${day} at ${time}`;
  }

  // Older dates
  const options = {
    month: "short",
    day: "numeric",
    ...time,
  };

  // Add year if not current year
  if (d.getFullYear() !== now.getFullYear()) {
    options.year = "numeric";
  }

  return `${d.toLocaleString("en-US", options)} at ${time}`;
};

export const timeAgos = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  const diffSeconds = Math.floor((Date.now() - d.getTime()) / 1000);

  if (diffSeconds < 60) return `${diffSeconds}s`; // seconds
  if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}m`; // minutes
  if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}h`; // hours
  if (diffSeconds < 604800) return `${Math.floor(diffSeconds / 86400)}d`; // days
  if (diffSeconds < 2629800) return `${Math.floor(diffSeconds / 604800)}w`; // weeks
  if (diffSeconds < 31557600) return `${Math.floor(diffSeconds / 2629800)}mo`; // months

  return `${Math.floor(diffSeconds / 31557600)}y`; // years
};

export const toast = (config = {}) => {
  const {
    icon = "error",
    title = "Success",
    position = "top-end",
    timer = 3000,
  } = config;
  const Toast = swal.mixin({
    toast: true,
    position,
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", swal.stopTimer);
      toast.addEventListener("mouseleave", swal.resumeTimer);
    },
  });
  Toast.fire({ icon, title });
};
