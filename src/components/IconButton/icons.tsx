import {
  AiFillCheckSquare,
  AiFillExclamationCircle,
  AiFillStar,
  AiOutlineBorder,
  AiOutlinePlus,
  AiOutlineCheck,
  AiFillHome,
  AiOutlineUser,
  AiOutlineEllipsis,
  AiFillPushpin,
  AiOutlinePercentage,
  AiFillSave,
  AiFillFolderAdd,
  AiOutlineMenu,
  AiFillCaretRight,
  AiOutlineLine,
  AiFillClockCircle,
  AiOutlineClockCircle,
  AiOutlineGift,
  AiFillGift,
  AiOutlineDeleteColumn,
  AiOutlineDeleteRow,
  AiOutlineCalculator,
  AiOutlineItalic,
} from "react-icons/ai";
import {
  BiArrowToBottom,
  BiArrowToLeft,
  BiArrowToRight,
  BiArrowToTop,
  BiChevronDown,
  BiChevronLeft,
  BiChevronRight,
  BiChevronUp,
  BiCopyAlt,
  BiExport,
  BiMessageX,
  BiMinus,
  BiRedo,
  BiRuler,
  BiSearch,
  BiUndo,
  BiWrench,
  BiX,
} from "react-icons/bi";
import {
  BsCircleFill,
  BsFilter,
  BsQuestionCircle,
  BsViewList,
  BsFilterSquareFill,
  BsFilterCircle,
  BsXSquare,
  BsXSquareFill,
  BsCheckSquareFill,
  BsCalendar2WeekFill,
  BsListUl,
  BsCalendar3,
  BsCalendar3Week,
  BsCalendar3Event,
  BsArrowsMove,
  BsQuestionSquare,
  BsQuestionSquareFill,
  BsDot,
  BsClipboard,
  BsFillClipboardCheckFill,
  BsCardText,
  BsCalendar3Range,
  BsTrash,
  BsTable,
  BsFullscreen,
  BsListColumnsReverse,
  BsTextLeft,
} from "react-icons/bs";
import {
  CgChevronDoubleDown,
  CgArrowsMergeAltH,
  CgArrowsBreakeH,
  CgToggleSquare,
  CgMoveRight,
  CgMoveLeft,
  CgArrowTopRight,
  CgChevronDoubleUp,
  CgMoveUp,
  CgMoveDown,
  CgPushRight,
} from "react-icons/cg";
import {
  FaArrowRight,
  FaBold,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaFastBackward,
  FaLightbulb,
  FaToilet,
} from "react-icons/fa";
import { BsFiletypeRaw } from "react-icons/bs";
import {
  GiPerspectiveDiceSixFacesRandom,
  GiPlasticDuck,
  GiBangingGavel,
} from "react-icons/gi";
import { GoTasklist, GoGoal, GoArrowSwitch } from "react-icons/go";
import {
  HiBeaker,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiLink,
  HiOutlineEyeOff,
  HiPencilAlt,
  HiViewList,
} from "react-icons/hi";
import { HiEllipsisVertical } from "react-icons/hi2";
import { ImPencil, ImStrikethrough } from "react-icons/im";
import { LiaTrashRestoreAltSolid } from "react-icons/lia";
import { LuCalendarClock, LuCopy, LuCopyCheck, LuSettings2, LuTextSelect } from "react-icons/lu";
import {
  MdChecklist,
  MdDeleteForever,
  MdRefresh,
  MdRepeat,
  MdSettings,
  MdStart,
} from "react-icons/md";
import {
  TbArrowLeftBar,
  TbArrowRightBar,
  TbArrowRightCircle,
  TbArrowsSort,
  TbColumnInsertLeft,
  TbColumnInsertRight,
  TbInfoSquare,
  TbListNumbers,
  TbListSearch,
  TbRepeatOff,
  TbRowInsertBottom,
  TbRowInsertTop,
  TbSquareHalf,
  TbSum,
} from "react-icons/tb";
import {
  TiDelete,
  TiCancel,
  TiFlowChildren,
  TiSortNumerically,
} from "react-icons/ti";
import { TfiThought } from "react-icons/tfi";
import { RiBearSmileLine, RiDeleteBin7Line } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import {
  PiCheckSquareOffsetBold,
  PiCircleNotch,
  PiGavel,
} from "react-icons/pi";
import {
  VscBeaker,
  VscBook,
  VscChecklist,
  VscListTree,
  VscTarget,
} from "react-icons/vsc";

export const handlePress = (e: React.KeyboardEvent, callback: () => any) => {
  if ([" ", "Enter"].includes(e.key)) {
    e.preventDefault();
    e.stopPropagation();
    callback();
  }
};

export type IconColors =
  | "white"
  | "black"
  | "grey"
  | "blue"
  | "lightGrey"
  | "darkGrey"
  | "yellow"
  | "red"
  | "green"
  | "pink"
  | "purple";

export const getIconSizeNum = (size: IconSize) =>
  ({
    xs: 16,
    small: 25,
    medium: 30,
    large: 40,
    xl: 50,
  }[size]);

export const getColorClass = (color?: IconColors) =>
  ({
    white: "white",
    pink: "var(--main-pink)",
    yellow: "var(--main-yellow)",
    blue: "var(--main-blue)",
    lightGrey: "var(--light-grey)",
    black: "black",
    darkGrey: "var(--dark-grey)",
    grey: "var(--grey)",
    red: "red",
    green: "var(--main-green)",
    purple: "var(--light-purple)",
  }[color || "black"]);

export type IconSize = "xs" | "small" | "medium" | "large" | "xl";

export const Icons = {
  CheckboxEmpty: AiOutlineBorder,
  CheckboxPlaceholder: PiCheckSquareOffsetBold,
  CheckboxCheckedBigger: BsCheckSquareFill,
  CheckboxChecked: AiFillCheckSquare,
  ChecklistLong: VscChecklist,
  Check: AiOutlineCheck,
  Checklist: MdChecklist,
  ListOl: TbListNumbers,
  ListUl: BsListUl,
  ListTree: VscListTree,
  List: AiOutlineMenu,
  ListMany: HiViewList,
  ListContentExpanded: BsViewList,
  ListType: GoTasklist,
  QuestionBox: BsQuestionSquare,
  QuestionBoxFill: BsQuestionSquareFill,
  Line: AiOutlineLine,
  Lines: BsTextLeft,
  LinesMany: BsListColumnsReverse,
  Card: BsCardText,
  InfoBox: TbInfoSquare,
  MultiLineSelect: LuTextSelect,

  Smile: RiBearSmileLine,

  Children: TiFlowChildren,

  ChevronDoubleDown: CgChevronDoubleDown,
  ChevronDoubleUp: CgChevronDoubleUp,
  ChevronLeft: BiChevronLeft,
  ChevronRight: BiChevronRight,
  ChevronUp: BiChevronUp,
  ChevronDown: BiChevronDown,
  ChevronLeftBig: FaChevronLeft,
  ChevronRightBig: FaChevronRight,
  ChevronUpBig: FaChevronUp,
  ChevronDownBig: FaChevronDown,
  ChevronDoubleRight: HiChevronDoubleRight,
  ChevronDoubleLeft: HiChevronDoubleLeft,

  BlockRight: AiFillCaretRight,

  Widen: CgArrowsBreakeH,
  Narrow: CgArrowsMergeAltH,
  SortArrows: TbArrowsSort,
  ArrowTopRight: CgArrowTopRight,
  MoveArrows: BsArrowsMove,
  FullScreen: BsFullscreen,

  TabRight: BiArrowToRight,
  TabLeft: BiArrowToLeft,
  LineUp: BiArrowToTop,
  LineDown: BiArrowToBottom,

  FromLeft: TbArrowRightBar,
  FromRight: TbArrowLeftBar,
  ContinueRight: TbArrowRightCircle,
  ToRight: CgPushRight,
  ArrowRight: FaArrowRight,

  MoveRight: CgMoveRight,
  MoveLeft: CgMoveLeft,
  MoveUp: CgMoveUp,
  MoveDown: CgMoveDown,

  Calculate: AiOutlineCalculator,
  SwitchArrows: GoArrowSwitch,

  Loading: PiCircleNotch,
  Refresh: MdRefresh,

  FolderAdd: AiFillFolderAdd,
  Save: AiFillSave,
  Delete: TiDelete,
  Cancel: TiCancel,
  Plus: AiOutlinePlus,
  Minus: BiMinus,
  Undo: BiUndo,
  Redo: BiRedo,
  DotBig: BsCircleFill,
  DotMedium: RxDotFilled,
  DotSmall: BsDot,
  Ellipsis: AiOutlineEllipsis,
  EllipsisVertical: HiEllipsisVertical,
  Calendar: BsCalendar2WeekFill,
  CalendarOutline: BsCalendar3Week,
  CalendarDay: BsCalendar3Event,
  CalendarMonth: BsCalendar3,
  CalendarRange: BsCalendar3Range,
  Repeat: MdRepeat,
  RepeatOff: TbRepeatOff,
  Backwards: FaFastBackward,
  Overdue: LuCalendarClock,

  Table: BsTable,
  TableInsertColRight: TbColumnInsertRight,
  TableInsertColLeft: TbColumnInsertLeft,
  TableInsertRowTop: TbRowInsertTop,
  TableInsertRowBottom: TbRowInsertBottom,
  TableDeleteCol: AiOutlineDeleteColumn,
  TableDeleteRow: AiOutlineDeleteRow,

  Clock: AiFillClockCircle,
  ClockOutline: AiOutlineClockCircle,

  Start: MdStart,

  Filter: BsFilter,
  FilterCircle: BsFilterCircle,
  FilterSquareFill: BsFilterSquareFill,

  RandomDice: GiPerspectiveDiceSixFacesRandom,
  NoItemsMessage: BiMessageX,

  ClipboardTask: BsClipboard,
  ClipboardChecked: BsFillClipboardCheckFill,
  Hammer: PiGavel,
  HammerBang: GiBangingGavel,
  Wrench: BiWrench,
  Beaker: VscBeaker,
  BeakerFilled: HiBeaker,
  QuestionCircle: BsQuestionCircle,
  ThoughtBubble: TfiThought,
  LightBulb: FaLightbulb,
  Target: VscTarget,
  Bullseye: GoGoal,

  Strikethrough: ImStrikethrough,
  Copy: LuCopy,
  CopySuccess: LuCopyCheck,
  CopyAlt: BiCopyAlt,
  Link: HiLink,
  Export: BiExport,

  Raw: BsFiletypeRaw,
  ExclamationCircleFill: AiFillExclamationCircle,

  Pencil: ImPencil,
  CardPencil: HiPencilAlt,
  TrashX: MdDeleteForever,
  Trash: BsTrash,
  TrashRestore: LiaTrashRestoreAltSolid,
  StarFilled: AiFillStar,
  Bold: FaBold,
  Italic: AiOutlineItalic,

  Pin: AiFillPushpin,
  Percent: AiOutlinePercentage,
  Sum: TbSum,

  Toilet: FaToilet,
  Bin: RiDeleteBin7Line,
  Duck: GiPlasticDuck,
  Home: AiFillHome,
  Settings: MdSettings,
  SettingsLines: LuSettings2,
  User: AiOutlineUser,

  Ruler: BiRuler,
  EyeOff: HiOutlineEyeOff,
  MagnifyingGlass: BiSearch,
  ListSearch: TbListSearch,
  Book: VscBook,

  HalfScreen: TbSquareHalf,
  X: BiX,
  XOutline: BsXSquare,
  XFill: BsXSquareFill,
  Toggle: CgToggleSquare,
  Numbers: TiSortNumerically,

  GiftOutline: AiOutlineGift,
  GiftFill: AiFillGift,
};
