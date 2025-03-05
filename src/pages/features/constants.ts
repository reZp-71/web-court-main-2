import { GeneralFeatureLabeled } from "../../common/storage";
import { FeatureCategory, IterParam, ModelConfig } from "../../constants";

export enum Actions {
  UpdateFeatureTable,
  ButtonClick,
  UpdateModelConfigs,
  UpdateModelConfigIdx,
  UpdateIterParams,
  UpdateSearch,
  UpdatePageSize,
  UpdatePageIndex
}

export interface ActionType {
  type: Actions;
  data: number | string | boolean | object | ModelConfig[] | IterParam;
}

export type FeaturesType = {
  [key in FeatureCategory]: GeneralFeatureLabeled[];
}

export const DefaultModelConfig: ModelConfig = {
  name: 'default',
  config: [
    {
      units: 32,
      activation: 'relu'
    },
    {
      units: 16,
      activation: 'relu'
    },
    {
      units: 2,
      activation: 'sigmoid'
    }
  ]
};

export const DefaultIterParam: IterParam = {
  epochs: 50,
  learningRate: 0.01
}

export const IMAGE_PNG_URI_PREFIX = 'data:image/png;base64,';
