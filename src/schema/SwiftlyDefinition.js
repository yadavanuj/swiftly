
export class SwiftlyDefinition {
    constructor(props) {
        const {id, jsonSchema, viewProps} = props;

        this.id = id;
        this.jsonSchema = jsonSchema;
        this.viewProps = viewProps;
    }
}