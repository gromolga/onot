<?php

namespace Project\Wysiwyg\Plugin;

class Config
{
    /**
     * Return WYSIWYG configuration
     *
     * @param \Magento\Ui\Component\Wysiwyg\ConfigInterface $configInterface
     * @param \Magento\Framework\DataObject $result
     * @return \Magento\Framework\DataObject
     */
    public function afterGetConfig(
        \Magento\Ui\Component\Wysiwyg\ConfigInterface $configInterface,
        \Magento\Framework\DataObject $result
    ) {
        if ($result->getDataByPath('settings/theme_advanced_fonts')) {
            // do not override ui_element config
            return $result;
        }
        $settings = $result->getData('settings');

        if (!is_array($settings)) {
            $settings = [];
        }

        $fonts = [
            'Montag=Montag,sans-serif',
            'Spacer=Spacer,sans-serif'
        ];

        $settings['theme_advanced_fonts'] = implode(';', $fonts);
        $result->setData('settings', $settings);
        return $result;
    }
}