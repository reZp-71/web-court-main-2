import { GeneralFeatureLabeled } from './common/storage';
import { ActivationIdentifier } from '@tensorflow/tfjs-layers/dist/keras_format/activation_config';
import { OverlaySettingsType } from './content/components/overlay';

export const WEBCOURT_UID = 'SrElXAlR4zOvfv8P';

export const MIN_ELEMENT_SIZE = {
  WIDTH: 5,
  HEIGHT: 5
};

export const MIN_ELEMENT_OPACITY = 0.2;

export const INPUT_TYPE_NONE = 'NONE';

export const TAKE_SCREENSHOT_DELAY = 200;

export const CONTEXT_MENU_IDS = {
  LABEL_INPUT: 'LABEL_INPUT',
  LABEL_USERNAME: 'LABEL_USERNAME',
  LABEL_PASSWORD: 'LABEL_PASSWORD',
  LABEL_BUTTON: 'LABEL_BUTTON',
  LABEL_SUBMIT_OTHER: 'LABEL_SUBMIT_OTHER',
  LABEL_SUBMIT_ONLY: 'LABEL_SUBMIT_ONLY',
  LABEL_BUTTON_OTHER: 'LABEL_BUTTON_OTHER',
  LABEL_BUTTON_OTHER_ALL: 'LABEL_BUTTON_OTHER_ALL',
  LABEL_INPUT_OTHER: 'LABEL_INPUT_OTHER',
  LABEL_PAGE: 'LABEL_PAGE',
  LABEL_LOGIN: 'LABEL_LOGIN',
  LABEL_CHANGE_PASS: 'LABEL_CHANGE_PASS',
  LABEL_SIGNUP: 'LABEL_SIGNUP',
  LABEL_PAGE_OTHER: 'LABEL_PAGE_OTHER',
  LABEL_CLEAR_ALL: 'LABEL_CLEAR_ALL',
  LABEL_IMAGE: 'LABEL_IMAGE',
  CAPTURE_TAB_IMAGE: 'CAPTURE_TAB_IMAGE',
  PRIDICT_IMAGE: 'PREDICT_IMAGE'
};

export enum OVERLAY_MODE {
  TOOLTIP,
  RECT,
  BUTTON,
  LABEL,
  EMPTY
};

export const DEFAULT_OVERLAY_SETTINGS: OverlaySettingsType = {
  mode: OVERLAY_MODE.EMPTY,
  text: '',
  top: 0,
  left: 0,
  index: 0,
  backgroundColor: 'cornsilk',
  color: 'black'
};

export enum MessageType {
  CONTEXT_CLICK,
  BTN_FEATURE_COLLECT,
  BTN_FEATURE_PREDICT,
  LABEL_IMAGE,
  PREDICT_RESULT
};

export interface Message {
  type: MessageType;
  action?: string;
  data: any
};

export enum LabelResult {
  field_username,
  field_password,
  field_submit,
  page_login,
  page_changepass,
  page_signup,
  other
};

export enum StorageCategory {
  Features = 'Features',
  ModelConfigs = 'ModelConfigs',
  IterParams = 'IterParams',
  Models = 'Models',
  Configs = 'Configs'
};

export enum FeatureCategory {
  Inputs = 'Inputs',
  Page = 'Page',
  Buttons = 'Buttons',
  Images = 'Images'
};

export type FeaturesType = {
  [key in FeatureCategory]: GeneralFeatureLabeled[];
};

export interface StorageData {
  [StorageCategory.Features]?: FeaturesType,
  [StorageCategory.ModelConfigs]?: ModelConfig[],
  [StorageCategory.Models]?: Model[];
};

export enum InputFieldType {
  other,
  username,
  password,
  options,
  submit,
  time,
  values
};

export const PageInputMaxCount = 10; // collect 10 inputs at max 

export interface ModelLayer {
  units: number;
  activation: ActivationIdentifier;
};

export interface ModelConfig {
  name: string;
  config: ModelLayer[];
};

export interface IterParam {
  epochs: number;
  learningRate: number;
};

export interface Model {
  name: string;
};

export interface ImageDataCanvas extends ImageData {
  colorSpace: PredefinedColorSpace;
};
