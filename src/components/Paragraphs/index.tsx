import React from "react";

const Paragraphs = ({ label, content }: { label: string; content: string }) => {
    return (
        <p>
            <span className="underline font-semibold">{label}:</span> {content}
        </p>
    );
};

export default Paragraphs;
