import { X } from "lucide-react";

const Preview = ({ files = [], onRemove }) => {
  if (!files.length) return null;

  return (
    <div className="mt-2 py-2 flex flex-wrap gap-4 overflow-y-auto">
      {files.map((file, index) => {
        const isImage = file.fileType.startsWith("image/");

        return (
          <div key={index} className="relative">
            {isImage ? (
              <img
                src={file.preview}
                alt={`Preview ${index}`}
                className="max-h-24 rounded-md shadow"
              />
            ) : (
              <video
                src={file.preview}
                controls
                className="max-w-[300px] max-h-75 rounded-md shadow"
              />
            )}

            <span
              type="button"
              onClick={() => onRemove(index)}
              className="absolute -top-2 -right-2 bg-red-400 hover:bg-red-500 text-white rounded-full p-1 shadow cursor-pointer transition"
            >
              <X size={16} />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
