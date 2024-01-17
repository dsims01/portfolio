import {
  AiFillCheckSquare,
  AiFillStar,
  AiOutlineBorder,
  AiOutlinePlus,
  AiOutlineCheck,
  AiFillHome,
  AiOutlineUser,
  AiOutlineEllipsis,
  AiFillPushpin,
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
  AiFillFolder,
  AiOutlineFolder,
  AiFillFolderOpen,
  AiOutlineInsertRowAbove,
  AiOutlineInsertRowBelow,
  AiOutlineInsertRowLeft,
  AiOutlineInsertRowRight,
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
  BiEnvelope,
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
  BsArrowRepeat,
  BsSkipBackwardCircle,
  BsCalendarCheck,
  BsQuestionOctagon,
  BsExclamationOctagonFill,
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
  FaLightbulb,
  FaToilet,
} from "react-icons/fa";
import { BsFiletypeRaw } from "react-icons/bs";
import {
  GiPerspectiveDiceSixFacesRandom,
  GiPlasticDuck,
  GiBangingGavel,
  GiNotebook,
} from "react-icons/gi";
import {
  GoTasklist,
  GoGoal,
  GoArrowSwitch,
  GoArrowUp,
  GoArrowDown,
} from "react-icons/go";
import {
  HiBeaker,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiLink,
  HiOutlineEye,
  HiOutlineEyeOff,
  HiPencil,
  HiPencilAlt,
  HiViewList,
} from "react-icons/hi";
import { HiEllipsisVertical } from "react-icons/hi2";
import { ImStrikethrough } from "react-icons/im";
import { LiaTrashRestoreAltSolid } from "react-icons/lia";
import {
  LuCalendarClock,
  LuCalendarPlus,
  LuCopy,
  LuCopyCheck,
  LuFolderEdit,
  LuLayoutGrid,
  LuListTodo,
  LuSettings2,
  LuTextSelect,
} from "react-icons/lu";
import {
  MdChecklist,
  MdDeleteForever,
  MdPercent,
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
  TbInfoSquare,
  TbListNumbers,
  TbListSearch,
  TbRepeatOff,
  TbSquareHalf,
  TbSquareMinus,
  TbSquarePlus2,
  TbSum,
  TbTableMinus,
  TbTablePlus,
} from "react-icons/tb";
import {
  TiDelete,
  TiCancel,
  TiFlowChildren,
  TiSortNumerically,
} from "react-icons/ti";
import { TfiThought } from "react-icons/tfi";
import {
  RiBearSmileLine,
  RiCheckboxMultipleFill,
  RiDeleteBack2Fill,
  RiDeleteBin7Line,
} from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import {
  PiCheckSquareOffsetBold,
  PiCircleNotch,
  PiFolders,
  PiGavel,
} from "react-icons/pi";
import { SlBriefcase } from "react-icons/sl";
import {
  VscBeaker,
  VscBook,
  VscChecklist,
  VscListTree,
  VscTarget,
} from "react-icons/vsc";

export const handlePress =
  (callback: (e: any) => any) => (e: React.KeyboardEvent) => {
    if ([" ", "Enter"].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      callback(e);
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
    purple: "var(--light-purple)",
  }[color || "black"]);

export type IconSize = "xs" | "small" | "medium" | "large" | "xl";

export const Icons = {
  CheckboxEmpty: AiOutlineBorder,
  CheckboxPlaceholder: PiCheckSquareOffsetBold,
  CheckboxCheckedBigger: BsCheckSquareFill,
  CheckboxChecked: AiFillCheckSquare,
  CheckboxPlus: TbSquarePlus2,
  CheckboxRemove: TbSquareMinus,
  ChecklistLong: VscChecklist,
  Check: AiOutlineCheck,
  CheckAll: RiCheckboxMultipleFill,
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
  Notebook: GiNotebook,
  InfoBox: TbInfoSquare,
  MultiLineSelect: LuTextSelect,
  Grid: LuLayoutGrid,

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
  SortTodo: LuListTodo,
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
  ArrowUp: GoArrowUp,
  ArrowDown: GoArrowDown,

  Loading: PiCircleNotch,
  Refresh: MdRefresh,

  Folder: AiFillFolder,
  FolderOutline: AiOutlineFolder,
  FolderOpen: AiFillFolderOpen,
  FolderAdd: AiFillFolderAdd,
  FolderEdit: LuFolderEdit,
  Folders: PiFolders,
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
  CalendarPlus: LuCalendarPlus,
  CalendarCheck: BsCalendarCheck,
  ResetTodo: MdRepeat,
  Repeat: BsArrowRepeat,
  RepeatOff: TbRepeatOff,
  Backwards: BsSkipBackwardCircle,
  Overdue: LuCalendarClock,

  Table: BsTable,
  TableCreate: TbTablePlus,
  TableRemove: TbTableMinus,
  TableInsertColRight: AiOutlineInsertRowRight,
  TableInsertColLeft: AiOutlineInsertRowLeft,
  TableInsertRowTop: AiOutlineInsertRowAbove,
  TableInsertRowBottom: AiOutlineInsertRowBelow,
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
  QuestionStop: BsQuestionOctagon,
  ThoughtBubble: TfiThought,
  LightBulb: FaLightbulb,
  Target: VscTarget,
  Bullseye: GoGoal,
  Briefcase: SlBriefcase,
  Contact: BiEnvelope,

  Strikethrough: ImStrikethrough,
  Copy: LuCopy,
  CopySuccess: LuCopyCheck,
  Link: HiLink,
  Export: BiExport,

  Raw: BsFiletypeRaw,
  ExclamationStop: BsExclamationOctagonFill,

  Pencil: HiPencil,
  CardPencil: HiPencilAlt,
  TrashX: MdDeleteForever,
  Trash: BsTrash,
  TrashRestore: LiaTrashRestoreAltSolid,
  DeleteLine: RiDeleteBack2Fill,
  StarFilled: AiFillStar,
  Bold: FaBold,
  Italic: AiOutlineItalic,

  Pin: AiFillPushpin,
  Percent: MdPercent,
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
  Eye: HiOutlineEye,
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
