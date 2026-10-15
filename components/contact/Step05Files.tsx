"use client";

import { useState, useRef, ChangeEvent, DragEvent } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  UploadCloud,
  X,
  FileText,
  FileCode2,
} from "lucide-react";
import { Step05Graphic } from "./graphics/StepGraphics";
import { ContactFormData, UploadedFile } from "./types";

export function Step05Left() {
  return (
    <div className="flex flex-col justify-center">
      {/* Eyebrow badge */}
      <div className="inline-flex w-fit items-center rounded-full bg-[#E0FAF0] px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#059669]">
        References &amp; Files
      </div>

      {/* Heading */}
      <h2 className="mt-2 text-2xl sm:text-4xl lg:text-[42px] font-black tracking-[-0.04em] text-[#111111] leading-tight">
        Share anything
        <br />
        that helps<span className="text-[#FF8B68]">.</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">
        Brand assets, wireframes, screenshots, a deck — anything that gives us a clearer picture of your idea.
      </p>

      {/* Step Graphic */}
      <div className="mt-2 sm:mt-3">
        <Step05Graphic />
      </div>
    </div>
  );
}

interface Step05FilesProps {
  formData: ContactFormData;
  updateFormData: (data: Partial<ContactFormData>) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export default function Step05Files({
  formData,
  updateFormData,
  onNext,
  onBack,
  onSkip,
}: Step05FilesProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleFiles = (incomingFiles: FileList | null) => {
    if (!incomingFiles || incomingFiles.length === 0) return;
    setError(null);

    const currentFiles = formData.files || [];
    const maxFiles = 6;
    const maxSizeBytes = 10 * 1024 * 1024; // 10 MB

    if (currentFiles.length + incomingFiles.length > maxFiles) {
      setError(`You can attach a maximum of ${maxFiles} files.`);
      return;
    }

    const newUploadedFiles: UploadedFile[] = [];

    for (let i = 0; i < incomingFiles.length; i++) {
      const file = incomingFiles[i];
      if (file.size > maxSizeBytes) {
        setError(`"${file.name}" exceeds the 10 MB limit.`);
        return;
      }

      let previewUrl: string | undefined;
      if (file.type.startsWith("image/")) {
        previewUrl = URL.createObjectURL(file);
      }

      newUploadedFiles.push({
        id: `${file.name}-${Date.now()}-${i}`,
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        previewUrl,
      });
    }

    updateFormData({
      files: [...currentFiles, ...newUploadedFiles],
    });
  };

  const handleRemoveFile = (idToRemove: string) => {
    const fileToRemove = (formData.files || []).find((f) => f.id === idToRemove);
    if (fileToRemove?.previewUrl) {
      URL.revokeObjectURL(fileToRemove.previewUrl);
    }
    const updated = (formData.files || []).filter((f) => f.id !== idToRemove);
    updateFormData({ files: updated });
  };

  const onDragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeaveHandler = () => {
    setIsDragOver(false);
  };

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const renderFileIcon = (file: UploadedFile) => {
    const ext = file.name.split(".").pop()?.toLowerCase();

    if (file.previewUrl) {
      return (
        <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0 border border-neutral-200">
          <Image
            src={file.previewUrl}
            alt={file.name}
            fill
            className="object-cover"
          />
        </div>
      );
    }

    if (ext === "pdf" || file.type.includes("pdf")) {
      return (
        <div className="w-9 h-9 rounded-lg bg-red-500 text-white flex items-center justify-center font-bold text-[10px] tracking-wider shrink-0">
          PDF
        </div>
      );
    }

    if (ext === "fig" || file.name.includes("figma")) {
      return (
        <div className="w-9 h-9 rounded-lg bg-[#FFE4F2] text-[#E048A0] flex items-center justify-center shrink-0">
          <FileCode2 className="w-5 h-5 text-[#E048A0]" />
        </div>
      );
    }

    return (
      <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0">
        <FileText className="w-5 h-5 text-[#111111]" />
      </div>
    );
  };

  return (
    <div className="space-y-3 sm:space-y-3.5">

          {/* Upload Section Header */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80">
                Upload Files (Optional)
              </label>
              <span className="text-[10px] sm:text-[11px] font-semibold text-muted-foreground/70 uppercase tracking-wider">
                Up to 6 files, 10 MB each
              </span>
            </div>

            {/* Hidden native file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={onFileInputChange}
              multiple
              className="hidden"
              accept=".png,.jpg,.jpeg,.svg,.pdf,.doc,.docx,.ppt,.pptx,.fig,.zip"
            />

            {/* Drag & Drop Card */}
            <div
              onDragOver={onDragOverHandler}
              onDragLeave={onDragLeaveHandler}
              onDrop={onDropHandler}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 ${
                isDragOver
                  ? "border-[#111111] bg-black/[0.03] scale-[1.01]"
                  : "border-[#E7E7E2] bg-white hover:border-black/30 hover:bg-neutral-50/50"
              }`}
            >
              {/* Pink upload circle */}
              <div className="w-10 h-10 rounded-full bg-[#FFE4F2] flex items-center justify-center mb-2 text-[#E048A0]">
                <UploadCloud className="w-5 h-5 stroke-[2]" />
              </div>

              <p className="text-xs sm:text-sm text-[#111111] font-semibold">
                Drag &amp; drop files here, or{" "}
                <span className="text-[#3B82F6] underline decoration-1 underline-offset-2">
                  browse
                </span>
              </p>
              <p className="mt-0.5 text-[10px] sm:text-[11px] text-muted-foreground">
                Images, PDF, Word, PowerPoint, Figma, ZIP or other files.
              </p>
            </div>

            {error && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>
            )}

            {/* Uploaded Files Chips/Grid */}
            {formData.files && formData.files.length > 0 && (
              <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {formData.files.map((file) => (
                  <div
                    key={file.id}
                    className="relative flex items-center gap-2 p-2 rounded-2xl bg-white border border-[#E7E7E2] shadow-xs group"
                  >
                    {renderFileIcon(file)}

                    <div className="flex-1 min-w-0 pr-4">
                      <p className="text-xs font-bold text-[#111111] truncate">
                        {file.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {formatFileSize(file.size)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFile(file.id);
                      }}
                      className="absolute top-2 right-2 text-muted-foreground/60 hover:text-black hover:bg-black/5 rounded-full p-1 transition-colors"
                      aria-label={`Remove ${file.name}`}
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Secondary Textarea: ANYTHING ELSE YOU'D LIKE TO SHARE? */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground/80 mb-1.5">
              Anything else you&apos;d like to share? (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.referenceLinks}
              onChange={(e) => updateFormData({ referenceLinks: e.target.value })}
              placeholder="Add links, inspiration, or any other details..."
              className="w-full px-4 py-2 sm:py-2.5 rounded-2xl bg-white border border-[#E7E7E2] text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#111111] focus:outline-none focus:ring-2 focus:ring-black/5 transition-all shadow-xs resize-none"
            />
          </div>

          {/* Bottom Actions */}
          <div className="pt-1 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onNext}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-black transition-colors cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight size={15} />
              </motion.button>

              <button
                type="button"
                onClick={onBack}
                className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer"
              >
                Back
              </button>
            </div>

            <button
              type="button"
              onClick={onSkip}
              className="text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 cursor-pointer"
            >
              Skip
            </button>
          </div>
    </div>
  );
}
