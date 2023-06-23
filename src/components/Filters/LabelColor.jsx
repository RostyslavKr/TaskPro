import React, { useState } from "react";
import css from "./Filters.module.css";

const LabelColor = () => {
  const [selectedPriority, setSelectedPriority] = useState("Show all");

  const handlePriorityChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPriority(selectedValue);

    if (selectedValue === "withoutPriority") {
      setSelectedPriority("Show all");
    }
  };

  const getLabelClassName = (priority) => {
    return selectedPriority === priority ? css.selectedLabel : css.labelItem;
  };

  return (
    <div className={css.labelContainer}>
      <div className={css.labelWrapper}>
        <h3 className={css.labelTitle}>Label color</h3>
        <p className={css.labelText}>{selectedPriority}</p>
      </div>
      <ul className={css.labelList}>
        <li>
          <label className={getLabelClassName("Show all")}>
            <input
              className={css.withoutPriorityInput}
              type="radio"
              value="withoutPriority"
              checked={selectedPriority === "Show all"}
              onChange={handlePriorityChange}
            />
            Without priority
          </label>
        </li>
        <li>
          <label className={getLabelClassName("Low")}>
            <input
              className={css.lowInput}
              type="radio"
              value="Low"
              checked={selectedPriority === "Low"}
              onChange={handlePriorityChange}
            />
            Low
          </label>
        </li>
        <li>
          <label className={getLabelClassName("Medium")}>
            <input
              className={css.mediumInput}
              type="radio"
              value="Medium"
              checked={selectedPriority === "Medium"}
              onChange={handlePriorityChange}
            />
            Medium
          </label>
        </li>
        <li>
          <label className={getLabelClassName("High")}>
            <input
              className={css.highInput}
              type="radio"
              value="High"
              checked={selectedPriority === "High"}
              onChange={handlePriorityChange}
            />
            High
          </label>
        </li>
      </ul>
    </div>
  );
};

export default LabelColor;

// import React, { useState } from "react";
// import css from "./Filters.module.css";

// const LabelColor = () => {
//   const [selectedPriority, setSelectedPriority] = useState("Show all");

//   const handlePriorityChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedPriority(selectedValue);

//     if (selectedValue === "withoutPriority") {
//       setSelectedPriority("Show all");
//     }
//   };
//   return (
//     <div className={css.labelContainer}>
//       <div className={css.labelWrapper}>
//         <h3 className={css.labelTitle}>Label color</h3>
//         <p className={css.labelText}>{selectedPriority}</p>
//       </div>
//       <ul className={css.labelList}>
//         <li>
//           <label className={css.labelItem}>
//             <input
//               className={css.withoutPriorityInput}
//               type="radio"
//               value="withoutPriority"
//               checked={selectedPriority === "Show all"}
//               onChange={handlePriorityChange}
//             />
//             Without priority
//           </label>
//         </li>
//         <li>
//           <label className={css.labelItem}>
//             <input
//               className={css.lowInput}
//               type="radio"
//               value="Low"
//               checked={selectedPriority === "Low"}
//               onChange={handlePriorityChange}
//             />
//             Low
//           </label>
//         </li>
//         <li>
//           <label className={css.labelItem}>
//             <input
//               className={css.mediumInput}
//               type="radio"
//               value="Medium"
//               checked={selectedPriority === "Medium"}
//               onChange={handlePriorityChange}
//             />
//             Medium
//           </label>
//         </li>
//         <li>
//           <label className={css.labelItem}>
//             <input
//               className={css.highInput}
//               type="radio"
//               value="High"
//               checked={selectedPriority === "High"}
//               onChange={handlePriorityChange}
//             />
//             High
//           </label>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default LabelColor;

// // const getInputColor = (priority) => {
// //   switch (priority) {
// //     case "Without priority":
// //       return "rgba(22, 22, 22, 0.1)";
// //     case "Low":
// //       return "#8FA1D0";
// //     case "Medium":
// //       return "#E09CB5";
// //     case "High":
// //       return "#BEDBB0";
// //     default:
// //       return "rgba(22, 22, 22, 0.1)";
// //   }
// // };