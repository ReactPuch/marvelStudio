import React from 'react';
import { create } from "react-test-renderer";
import StatusContainerWithHooks from './StatusComtainerWithHooksx';

describe("StatusContainerWithHooks Component", () => {
    it("status from props should be in the state", () => {
      const component = create(<StatusContainerWithHooks status = 'Adamovich'/>)
      const instance = component.getInstance();
      expect(instance.state.status).toBe('Adamovich');
    });
  });