# Learning Path Data Flow & Types
## Data Flow Diagram
```mermaid
graph TD
    %% UI & Input Validation
    A[<b>UI Form</b><br/>User Input] -->|Submit & Validate with Zod| C{Is Valid?}
    C -->|No| D[<b>UI Validation Error</b><br/>Highlight invalid fields]
    C -->|Yes| E(<b>LearningPathParams</b>)

    %% Prompt / AI request
    E -->|Build AI Request| F(<b>AIRequest</b>)

    %% AI request
    F -->|API / SDK Request| G[<b>AI API</b><br/>Gemini / OpenAI]

    %% Raw response
    G -->|Response| H(<b>AIRawResponse</b><br/>Raw JSON String)

    %% Output Validation
    H -->|Validate Schema with Zod| J{Is Valid?}
    J -->|No| K[<b>AI Error Handling</b><br/>Retry / Log Error]
    K -->|Return Error| M(<b>AIError</b>)
    J -->|Yes| L(<b>LearningPath</b>)

    %% Map data & UI state
    L -->|Map Data / Add Initial State| O(<b>InteractiveLearningPath</b>)
    O --> P[<b>Learning Path UI</b><br/>Interactive Roadmap]
    M --> N[<b>UI Error</b><br/>Show Error Message]

    %% Styles
    style C fill:#1f2937,stroke:#f59e0b,color:#fff
    style E fill:#1f2937,stroke:#10b981,color:#fff
    style F fill:#1f2937,stroke:#3b82f6,color:#fff
    style H fill:#1f2937,stroke:#f59e0b,color:#fff
    style J fill:#1f2937,stroke:#f59e0b,color:#fff
    style L fill:#1f2937,stroke:#10b981,color:#fff
    style O fill:#1f2937,stroke:#8b5cf6,color:#fff
    style M fill:#1f2937,stroke:#ef4444,color:#fff
```

## Types
```ts
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type WeeklyHours = '2-5' | '5-10' | '10-20' | '20+';
// NOTE: Not sure about the format yet. Will need to parse it for the prompt

export interface LearningPathParams {
  goal: string;
  skillLevel: SkillLevel;
  background?: string;
  weeklyHours: WeeklyHours;
}

// NOTE: Just an example. Actual structure depends on the AI model
export interface AIRequest {
  systemInstruction: string;
  userMessage: string;
  responseSchema: object;
}

export interface AIRawResponse {
  rawJsonString: string;
}


export interface AIError {
  code: 'AI_TIMEOUT' | 'AI_REQUEST_FAILED' | 'INVALID_JSON' | 'INVALID_SCHEMA';
  message: string;
}


export interface LearningPathStep {
  stepNumber: number;
  title: string;
  description: string;
  estimatedWeeks: number;
}


export interface LearningPath {
  id: string;
  goal: string;
  skillLevel: SkillLevel;
  totalSteps: number;
  steps: LearningPathStep[];
  createdAt: string;
}


export interface InteractiveLearningPathStep extends LearningPathStep {
  completed: boolean;
}


export interface InteractiveLearningPath extends Omit<LearningPath, 'steps'> {
  steps: InteractiveLearningPathStep[];
}
```
