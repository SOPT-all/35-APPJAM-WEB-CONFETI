import { useRef, useState } from 'react';
import * as styles from './search-bar.css';
import SvgIcSicGray18 from '../../icons/src/IcSicGray18';
import SvgBtnArrowLeft20 from '../../icons/src/BtnArrowLeft20';
import SvgBtnClose from '../../icons/src/BtnClose';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void; // onFocus 추가
}

export const SearchBar = ({
  value,
  onChange,
  onKeyDown,
  onFocus, // onFocus를 props로 받음
}: SearchBarProps) => {
  const textInput = useRef<HTMLInputElement>(null);
  const [showClearBtn, setShowClearBtn] = useState(false);

  const handleFocus = () => {
    if (textInput.current) {
      textInput.current.placeholder = '';
    }
    if (onFocus) {
      onFocus(); // 부모로부터 받은 onFocus 콜백 실행
    }
  };

  const handleClear = () => {
    if (textInput.current) {
      textInput.current.value = '';
      textInput.current.focus();
      setShowClearBtn(false);
      onChange({
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowClearBtn(e.target.value.length > 0);
    onChange(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <SvgBtnArrowLeft20 width={20} height={20} />
        <div className={styles.searchBar({ type: 'default' })}>
          <SvgIcSicGray18
            className={styles.searchIcon}
            width={18}
            height={18}
          />
          <input
            className={styles.textSection}
            type="text"
            placeholder="아티스트를 검색해주세요"
            ref={textInput}
            value={value}
            onChange={handleInputChange}
            onKeyDown={onKeyDown}
            onFocus={handleFocus} // handleFocus 연결
          />
          {showClearBtn && (
            <SvgBtnClose
              className={styles.closeBtn}
              onClick={handleClear}
              width={18}
              height={18}
              style={{ display: 'flex' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
