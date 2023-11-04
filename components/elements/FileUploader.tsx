import React, { useRef } from "react";

export const FileUploader = ({ handleFile, className }: any) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleClick = (event: any) => {
    hiddenFileInput.current?.click();
  };
  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
  return (
    <div className={className}>
      <button className="hawa-h-full hawa-w-full" onClick={handleClick} />
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
    </div>
  );
};
