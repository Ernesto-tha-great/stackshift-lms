/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Submissions } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubmissionsUpdateFormInputValues = {
    video?: string;
    text?: string;
    github?: string;
};
export declare type SubmissionsUpdateFormValidationValues = {
    video?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
    github?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubmissionsUpdateFormOverridesProps = {
    SubmissionsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    video?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    github?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SubmissionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SubmissionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    submissions?: Submissions;
    onSubmit?: (fields: SubmissionsUpdateFormInputValues) => SubmissionsUpdateFormInputValues;
    onSuccess?: (fields: SubmissionsUpdateFormInputValues) => void;
    onError?: (fields: SubmissionsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SubmissionsUpdateFormInputValues) => SubmissionsUpdateFormInputValues;
    onValidate?: SubmissionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SubmissionsUpdateForm(props: SubmissionsUpdateFormProps): React.ReactElement;
