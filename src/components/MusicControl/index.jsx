import { FloatButton } from 'antd'
import * as S from './styled'

function MusicNoteIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
    </svg>
  )
}

function MusicControl({ isPlaying, onToggle }) {
  return (
    <FloatButton
      icon={
        <S.SpinningIcon $playing={isPlaying}>
          <MusicNoteIcon />
        </S.SpinningIcon>
      }
      type="primary"
      onClick={onToggle}
      tooltip={isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc'}
    />
  )
}

export default MusicControl
