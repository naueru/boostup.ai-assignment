// Types
import { FC, useEffect, useState } from "react";

// Components
import Item, { TItemData } from "./components/Item/Item";
import Spinner from "../Spinner/Spinner";

// Styles
import styles from "./autoComplete.module.css";

export type TAutoCompleteProps = {
  placeholder?: string;
  value?: string;
  data: TItemData[];
  onSelect: Function;
  onClear: Function;
  loading?: boolean;
};

const AutoComplete: FC<TAutoCompleteProps> = ({
  placeholder,
  value = "",
  data,
  onSelect,
  onClear,
  loading,
}) => {
  const [filter, setFilter] = useState(value);

  const filteredData = data.filter(
    (current) => current.label.toLowerCase().indexOf(filter.toLowerCase()) > -1
  );

  const handleSelect = (value: string) => {
    onSelect(value);
  };

  const handleReset = () => {
    setFilter("");
    onClear();
  };

  useEffect(() => {
    setFilter(value);
  }, [value]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.icon} ${styles.search}`} />
        <input
          placeholder={placeholder}
          value={filter}
          className={styles.input}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div
          className={`${styles.icon} ${styles.trash}`}
          onClick={handleReset}
        />
      </div>
      <div className={styles.suggestionsContainer}>
        <div className={styles.suggestionsWrapper}>
          {loading ? (
            <div className={styles.spinnerContainer}>
              <Spinner size="s" />
            </div>
          ) : (
            <ul className={styles.suggestionsList}>
              {filteredData.map((item: TItemData, index) => (
                <Item
                  key={`autocomplete_item_${index}`}
                  onClick={handleSelect}
                  {...item}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
