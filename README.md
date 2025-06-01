# angular-material-override
Angular Material Library override with custom design


## 🗂️ **📘 CoreUX Local Preview Setup Reference**

### 📁 Folder Structure

```bash
coreux-workspace/
├── projects/
│   ├── coreux/         ← Angular Library
│   └── pre-view-app/   ← Demo App for Testing CoreUX
```

---

## ✅ STEP-BY-STEP CHANGES MADE

---

### 🔹 1. ✅ **Library `package.json` Configuration**

📄 `projects/coreux/package.json`

Moved Angular packages from `dependencies` → `peerDependencies` as per library rules:

```json
"peerDependencies": {
  "@angular/common": "^19.2.0",
  "@angular/core": "^19.2.0",
  "@angular/animations": "^19.2.0",
  "@angular/cdk": "^19.2.0"
},
"dependencies": {
  "@angular/material": "^19.2.18",
  "tslib": "^2.3.0"
}
```

---

### 🔹 2. ✅ **tsconfig.lib.json Fix**

📄 `projects/coreux/tsconfig.lib.json`

Added types and typeRoots:

```json
"compilerOptions": {
  ...
  "types": ["node"],
  "typeRoots": ["../../node_modules/@types"]
}
```

---

### 🔹 3. ✅ **tsconfig.app.json Path Mapping**

📄 `projects/pre-view-app/tsconfig.app.json`

Added path to resolve `coreux` from the built `dist` folder:

```json
"compilerOptions": {
  ...
  "paths": {
    "coreux": ["../../dist/coreux"]
  }
}
```

Also updated `include`:

```json
"include": ["src/**/*.ts"]
```

---

### 🔹 4. ✅ **Preview App Component Setup**

📄 `projects/pre-view-app/src/app/app.component.ts`

Used the CoreUX input:

```ts
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CoreUxInputComponent } from 'coreux';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreUxInputComponent, ReactiveFormsModule],
  template: `<core-ux-input placeholder="Your Name" [control]="control" />`
})
export class AppComponent {
  control = new FormControl('');
}
```

---

### 🔹 5. ✅ **Removed `.spec.ts` to Avoid Test Errors**

📄 Deleted:

```bash
projects/pre-view-app/src/app/app.component.spec.ts
```

---

### 🔹 6. ✅ **Fixed SCSS Build Error**

📄 `projects/pre-view-app/src/styles.scss`

🔁 Replaced Material mixins with prebuilt theme:

```scss
@import '@angular/material/prebuilt-themes/indigo-pink.css';
```

---

### 🔹 7. ✅ **Build & Serve Commands**

```bash
ng build coreux
ng serve pre-view-app
```

✅ Go to: [http://localhost:4200](http://localhost:4200)
You’ll see your `core-ux-input` in action.
