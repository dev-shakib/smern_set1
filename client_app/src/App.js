import React, {Component} from 'react';
import '@shopify/polaris/styles.css';
import {Layout, Card, FormLayout, TextField, Scrollable} from '@shopify/polaris';
import {EmbeddedApp} from '@shopify/polaris/embedded';


class App extends Component {

    state = {cities: {}};

    async componentDidMount() {
        const response = await fetch('/api/shop', {credentials: "same-origin" });
        const cities = await response.json();
        console.log(cities);
    }

    render() {
        return (
            <EmbeddedApp
                apiKey="01b7bee3a29d4115f19882c30275c96e"
                shopOrigin="https://liquix-app-development.myshopify.com"
            >

                <Layout sectioned>
                    <Layout.AnnotatedSection
                        title="Store details"
                        description="Shopify and your customers will use this information to contact you."
                    >
                        <Card sectioned>
                            <FormLayout>
                                <FormLayout.Group>
                                    <TextField
                                        type="number"
                                        label="Minimum order"
                                    />
                                    <TextField
                                        type="number"
                                        label="Maximum order"
                                    />
                                </FormLayout.Group>
                            </FormLayout>
                        </Card>
                    </Layout.AnnotatedSection>
                    <Layout.AnnotatedSection
                        title="Store details"
                        description="Shopify and your customers will use this information to contact you."
                    >
                        <Card
                            title="Terms of service"
                            sectioned
                            vertical
                            shadow
                            hint
                        >
                            <Scrollable
                                shadow
                                style={{height: '100px'}}
                            >
                                <div>
                                    <ul>


                                    </ul>
                                </div>
                            </Scrollable>
                        </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </EmbeddedApp>
        );
    }
}

export default App;