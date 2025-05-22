import * as React from "react";
import Button from "@mui/material/Button";


export default function LearnButton() {
    
    const buttonCode = `import Button from "@mui/material/Button";
    
    <Button variant="contained" color="primary">
        MUI Button
        </Button>
    `.trim();

    return (
        <div style={{ margin: 24 }}>
            <h2>Material UI Button Example</h2>
            <Button variant="contained" color="primary">
                MUI Button
            </Button>
            <pre
                style={{ 
                    background: "#222",
                    color: "#b7e0ff",
                    padding: 16,
                    borderRadius: 8,
                    marginTop: 20,
                    fontSize: 16,
                }}>
                    {buttonCode}
            </pre>
        </div>
    )
}