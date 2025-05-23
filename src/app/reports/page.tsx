"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/header/Header";
import Select from "react-select";
import styles from "./page.module.css";
import Carousel from "../components/carousel/Carousel";
const folderOptions = [
  { value: "Finance", label: "Finance" },
  { value: "HR", label: "HR" },
  { value: "Operations", label: "Operations" },
];

export default function ReportsPage() {
  const router = useRouter();
  const [folder, setFolder] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [query, setQuery] = useState("");

  const handleGenerateReport = () => {
    console.log("Generating report with query:", query);
    // router.push or fetch logic here
  };

  return (

    <>
        <div className={styles.pageContainer}>
      <Header />
      <h1 className={styles.header}>Reports Page</h1>

      <div className={styles.filters}>
        <label className={styles.label}>
          Select Folder
          <Select
            placeholder="Select Folder"
            options={folderOptions}
            onChange={(val) => setFolder(val?.value)}
            className={styles.select}
          />
        </label>
        <div className={styles.dateGroup}>
          <label className={styles.label}>
            Start Date
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            End Date
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={styles.input}
            />
          </label>
        </div>
        <label className={styles.label}>
          Search Reports
          <input
            type="text"
            placeholder="Search reports based on keywords"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={styles.input}
          />
        </label>
      </div>

      <textarea
        className={styles.textArea}
        placeholder="Enter your report query (100–150 words)"
        rows={6}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className={styles.button} onClick={handleGenerateReport}>
        Generate Report
      </button>
     
        <Carousel />
      <div className={styles.grid}>
        {/* You can show matching reports here based on filters */}
        {/* Placeholder for now */}
        <p>No reports to display.</p>
       
      </div>
    </div>
    </>
    
  );
}
