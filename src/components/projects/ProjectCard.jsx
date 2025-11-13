import React, { useState, useEffect, useMemo, useCallback } from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project = {},
  isActive = false,
  onOpenModal = () => {},
  onCloseModal = () => {},
}) => {
  const {
    title = "Untitled Project",
    imageSrc = null,
    description = "",
    skills = [],
    demo = "",
    source = "",
    status = "",
    status_demo = false,
    status_sourcode = false,
  } = project;

  const demoAvailable = Boolean(status_demo) && Boolean(demo);
  const sourceAvailable = Boolean(status_sourcode) && Boolean(source);

  // --- normalisasi array image ---
  const images = useMemo(() => {
    if (!imageSrc) return [{ src: "", caption: "" }];
    if (Array.isArray(imageSrc)) {
      return imageSrc.map((img) =>
        typeof img === "string"
          ? { src: img, caption: "" }
          : { src: img.src ?? "", caption: img.caption ?? "" }
      );
    }
    if (typeof imageSrc === "string") return [{ src: imageSrc, caption: "" }];
    return [{ src: imageSrc?.src ?? "", caption: imageSrc?.caption ?? "" }];
  }, [imageSrc]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // --- navigasi gambar ---
  const nextImage = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((p) => (p + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIndex((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  // --- auto slide hanya di card (bukan modal) ---
  useEffect(() => {
    if (isActive || images.length <= 1) return; // ❌ stop sliding di modal
    const timer = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, isActive]);

  // --- keyboard navigation hanya di modal ---
  useEffect(() => {
    if (!isActive) return;
    const onKey = (e) => {
      if (e.key === "Escape") onCloseModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isActive, onCloseModal, nextImage, prevImage]);

  const getStatusClass = (s) => {
    switch ((s || "").toLowerCase()) {
      case "selesai":
        return { backgroundColor: "#c1f1d1", color: "#065f46" };
      case "pengembangan":
        return { backgroundColor: "#fceec0", color: "#8a5200" };
      case "dibatalkan":
        return { backgroundColor: "#f8caca", color: "#8b1c1c" };
      default:
        return { backgroundColor: "#e5e7eb", color: "#374151" };
    }
  };

  const currentImageSrc = images?.[currentIndex]?.src || "";
  const currentCaption = images?.[currentIndex]?.caption || "";

  return (
    <div className={styles.containerCard}>
      {/* --- Thumbnail Card --- */}
      <div className={styles.containerImage}>
        <img
          className={styles.image}
          src={getImageUrl(currentImageSrc)}
          alt={title}
          onError={(e) => (e.currentTarget.src = "/placeholder.png")}
        />

        {currentCaption && (
          <div className={styles.caption}>{currentCaption}</div>
        )}

        {images.length > 1 && !isActive && (
          <>
            <button className={styles.prevBtn} onClick={prevImage}>
              &#10094;
            </button>
            <button className={styles.nextBtn} onClick={nextImage}>
              &#10095;
            </button>
          </>
        )}

        <button className={styles.viewBtn} onClick={onOpenModal}>
          Lihat
        </button>
      </div>

      {/* --- Info Card --- */}
      <div className={styles.status} style={getStatusClass(status)}>
        {status || "Status tidak diketahui"}
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {demoAvailable ? (
          <a
            className={styles.link}
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        ) : (
          <span className={styles.disabledLink}>Demo tidak tersedia</span>
        )}
        {sourceAvailable ? (
          <a
            className={styles.link}
            href={source}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
        ) : (
          <span className={styles.disabledLink}>Source code tidak tersedia</span>
        )}
      </div>

      {/* --- Modal Fullscreen --- */}
      {isActive && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => e.target === e.currentTarget && onCloseModal()}
        >
          <button className={styles.closeBtn} onClick={onCloseModal}>
            ✕
          </button>

          {images.length > 1 && (
            <>
              <button className={styles.prevBtn} onClick={prevImage}>
                &#10094;
              </button>
              <button className={styles.nextBtn} onClick={nextImage}>
                &#10095;
              </button>
            </>
          )}

          <div className={styles.modalContent}>
            <img
              src={getImageUrl(currentImageSrc)}
              alt={title}
              className={styles.modalFullImage}
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
            />
            {currentCaption && (
              <div className={styles.modalCaption}>{currentCaption}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
